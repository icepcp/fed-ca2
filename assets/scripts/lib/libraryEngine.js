// Global module state for active filters
let currentCategory = "all";
let currentSearch = "";
let currentMenuData = { categories: [], products: [] };

// 1. Helper to render individual product cards
function renderProductCard(product) {
  const isLocation = Boolean(product.lat && product.lng);
  const tagsHtml =
    Array.isArray(product.tags) && product.tags.length > 0
      ? `<div class="flex flex-wrap gap-1 mt-3">
          ${product.tags
            .map(
              (tag) => `
                <span class="inline-block text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                  ${tag}
                </span>
              `,
            )
            .join("")}
        </div>`
      : "";

  if (isLocation) {
    return `
      <div 
        class="branch-card product-card bg-white p-5 rounded-3xl border border-black/15 flex flex-col justify-between hover:shadow-xl hover:border-amber-400 transition-all cursor-pointer"
        data-lat="${product.lat}"
        data-lng="${product.lng}"
        data-name="${product.name}"
      >
        <div>
          <img 
            src="${product.image || "/assets/images/placeholder.jpg"}" 
            alt="${product.name}" 
            class="w-full h-48 object-cover rounded-xl"
          >
          
          <div class="mt-4">
            <h3 class="font-bold text-amber-950 text-xl/7">${product.name}</h3>
            <p class="text-sm! text-gray-600 mt-2 leading-relaxed">${product.description}</p>
          </div>

          <p class="text-sm! text-gray-600 mt-1">${product.address ? `📍 Location: ${product.address}` : ""}</p>
        </div>

        <div>
          ${tagsHtml}
        </div>
      </div>
    `;
  }

  return `
    <div class="product-card bg-white p-4 rounded-3xl border border-black/15 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <img 
          src="${product.image || "/assets/images/placeholder.jpg"}" 
          alt="${product.name}" 
          class="w-full h-60 object-cover rounded-xl"
        >
        
        <div class="flex justify-between items-start mt-3 gap-x-3">
          <h3 class="font-bold text-amber-950 text-xl/8">${product.name}</h3>
          ${product.price ? `<span class="text-amber-700 font-semibold text-lg">$${Number(product.price).toFixed(2)}</span>` : ""}
        </div>

        <p class="text-xs text-gray-600 mt-1">${product.description ? product.description : ""}</p>
      </div>

      <div>
        ${tagsHtml}
      </div>
    </div>
  `;
}

// 2. Helper to filter products & render category sections
function renderMenuResults() {
  const { categories = [], products = [] } = currentMenuData;
  const isLocation = products.some((p) => p.lat && p.lng);

  // Filter products by category AND search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      currentCategory === "all" || product.categoryId === currentCategory;

    const query = currentSearch.toLowerCase().trim();
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Handle Empty State (No items found)
  if (filteredProducts.length === 0) {
    return `
      <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 mt-4">
        <p class="text-gray-500 font-medium">No items found matching your filter or search.</p>
        <button id="reset-filters-btn" class="mt-3 text-xs bg-amber-200 text-amber-900 px-3 py-1.5 rounded-full font-bold hover:bg-amber-300 transition-colors">
          Clear Filters
        </button>
      </div>
    `;
  }

  // Render category sections (hides empty categories during active search/filter)
  return categories
    .map((category) => {
      const categoryProducts = filteredProducts.filter(
        (p) => p.categoryId === category.id,
      );

      // Hide category if no products inside match the search/filter
      if (categoryProducts.length === 0) return "";

      return `
        <section class="mb-10">
          <h2 class="text-2xl font-bold text-amber-900">${category.name}</h2>
          <p class="text-sm text-gray-500 mb-4">${category.description}</p>
          <div class="${isLocation ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "grid grid-cols-1 md:grid-cols-3 gap-4"}">
            ${categoryProducts.map(renderProductCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

// 3. Main Exported Component
export default function Library(menuData) {
  currentMenuData = menuData || { categories: [], products: [] };
  currentCategory = menuData.initialCategory || "all";
  // Category Tag Buttons
  const categoryTags = [
    { id: "all", name: "All Items" },
    ...currentMenuData.categories,
  ]
    .map((cat) => {
      const isActive = currentCategory === cat.id;
      return `
        <button 
          type="button"
          data-category="${cat.id}"
          class="shrink-0 category-btn text-sm px-4 py-1.5 rounded-full transition-colors ${
            isActive
              ? "bg-amber-900 text-white font-bold"
              : "bg-amber-200/60 text-amber-950 hover:bg-amber-200 hover:text-amber-950"
          }"
        >
          ${cat.name}
        </button>
      `;
    })
    .join("");

  return `
    <div class="menu-library flex flex-col gap-y-6">
      <!-- Search & Filter Bar -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-amber-100/50 p-4 rounded-2xl border border-amber-200/50">
        <!-- Category Filter Tags -->
        <div id="category-filters" class="min-w-0 flex flex-nowrap gap-2 items-center overflow-x-auto w-full">
          <span class="text-xs font-bold text-amber-900 uppercase tracking-wider mr-1">Filter:</span>
          ${categoryTags}
        </div>

        <!-- Search Input -->
        <div class="relative w-full md:w-72">
          <input 
            id="menu-search-input" 
            type="text" 
            value="${currentSearch}"
            placeholder="Search..." 
            class="w-full pl-9 pr-4 py-2 text-sm rounded-full bg-white border border-black/15 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <img src="/assets/icons/search.svg" class="w-4 h-4 absolute left-3 top-3 text-amber-900/50 fill-current">
        </div>
      </div>

      <!-- Render Results Grid -->
      <div id="menu-results">
        ${renderMenuResults()}
      </div>
    </div>
  `;
}

// 4. Attach Event Listeners (Called after page DOM insertion)
export function initLibraryEvents() {
  const searchInput = document.getElementById("menu-search-input");
  const categoryFilters = document.getElementById("category-filters");
  const resultsContainer = document.getElementById("menu-results");

  const updateUI = () => {
    if (resultsContainer) {
      resultsContainer.innerHTML = renderMenuResults();
    }

    // Safely toggle classes without blowing away shrink-0 or whitespace-nowrap
    const buttons = categoryFilters?.querySelectorAll(".category-btn");
    buttons?.forEach((btn) => {
      const isActive = btn.dataset.category === currentCategory;

      btn.classList.toggle("bg-amber-900", isActive);
      btn.classList.toggle("text-white", isActive);
      btn.classList.toggle("font-bold", isActive);

      btn.classList.toggle("bg-amber-200/60", !isActive);
      btn.classList.toggle("text-amber-950", !isActive);
    });
  };

  searchInput?.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    updateUI();
  });

  categoryFilters?.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-btn");
    if (!btn) return;

    currentCategory = btn.dataset.category;
    updateUI();
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "reset-filters-btn") {
      currentCategory = "all";
      currentSearch = "";
      if (searchInput) searchInput.value = "";
      updateUI();
    }
  });
}
