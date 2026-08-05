import HomePage from "./pages/home.js";
import AboutPage from "./pages/about.js";
import MenuPage, { initMenuPage } from "./pages/menu.js";
import MerchandisePage from "./pages/merchandise.js";
import MembershipPage from "./pages/membership.js";
import SustainabilityPage from "./pages/sustainability.js";
import PromotionsPage from "./pages/promotions.js";
import ReviewsPage from "./pages/reviews.js";
import LocationsPage, { initLocationsPage } from "./pages/locations.js";
import EventsPage from "./pages/events.js";
import FaqPage from "./pages/faq.js";
import ContactUsPage from "./pages/contactus.js";

// 1. Navigation Component (Renders structural HTML)
function Navigation() {
  const navItems = Object.entries(routes)
    .map(([path, route]) => {
      return `
        <li>
          <a 
            href="#${path}" 
            data-path="${path}"
            class="flex items-center gap-x-3 w-full p-3 font-medium text-amber-900 hover:bg-amber-200 transition-colors"
          >
            <img src="${route.icon}" alt="" class="w-5 h-5 shrink-0" />
            <span>${route.name}</span>
          </a>
        </li>
      `;
    })
    .join("");

  return `
    <nav aria-label="Main Navigation" class="nav-bg flex flex-col pt-4 px-4 shrink-0 min-h-screen bg-white outline outline-black/15 sticky top-0">
      <div class="flex items-center gap-x-2 shrink-0 pr-10 mb-4">
        <img src="assets/images/logo.jpg" alt="Banana Bliss Logo" class="w-20 h-20 rounded-full object-cover">
        <div class="flex flex-col">
            <span class="text-2xl font-bold">Banana Bliss</span>
            <span class="text-sm text-gray-500">Café & Dessert Bar</span>
        </div>
      </div>

      <ul class="bg-yellow-100 rounded-lg overflow-hidden">
        ${navItems}
      </ul>
    </nav>
  `;
}

// 2. Helper to efficiently update Active Nav state without re-rendering DOM
function updateActiveNav(currentPath) {
  const links = document.querySelectorAll("#nav-container a[data-path]");

  links.forEach((link) => {
    const isActive = link.getAttribute("data-path") === currentPath;

    // Accessibility attribute
    link.setAttribute("aria-current", isActive ? "page" : "false");

    // Toggle active state classes directly
    link.classList.toggle("bg-amber-300", isActive);
    link.classList.toggle("font-bold", isActive);
  });
}

// 3. Footer Component
function Footer() {
  return `
    <footer class="bg-[#e4d5b4] text-stone-800 px-10 py-8">
      <div class="max-w-2xl mx-auto text-center space-y-4">
        <h3 class="text-3xl font-semibold text-stone-900">
          Banana Bliss Café
        </h3>

       <p class="text-stone-700 whitespace-nowrap">
          A cosy banana dessert café serving freshly baked treats and handcrafted drinks.
        </p>

        <p class="text-stone-600 whitespace-nowrap">
          Singapore | +65 6123 4567 | hello@bananabliss.com
        </p>

      </div>
    </footer>
  `;
}

export default Footer;

// 4. Map hash routes to page functions
const routes = {
  "/": {
    component: HomePage,
    name: "Home",
    icon: "/assets/icons/home.svg",
  },
  "/about": {
    component: AboutPage,
    name: "About Us",
    icon: "/assets/icons/info.svg",
  },
  "/menu": {
    component: MenuPage,
    name: "Menu",
    icon: "/assets/icons/menu.svg",
    init: initMenuPage,
  },
  "/merchandise": {
    component: MerchandisePage,
    name: "Merchandise",
    icon: "/assets/icons/apparel.svg",
  },
  "/membership": {
    component: MembershipPage,
    name: "Membership",
    icon: "/assets/icons/crown.svg",
  },
  "/locations": {
    component: LocationsPage,
    name: "Locations",
    icon: "/assets/icons/globe-location.svg",
    init: initLocationsPage
  },
  "/reviews": {
    component: ReviewsPage,
    name: "Reviews",
    icon: "/assets/icons/reviews.svg",
  },
  "/promotions": {
    component: PromotionsPage,
    name: "Promotions",
    icon: "/assets/icons/percent.svg",
  },
  "/sustainability": {
    component: SustainabilityPage,
    name: "Sustainability",
    icon: "/assets/icons/energy_savings_leaf.svg",
  },
  "/events": {
    component: EventsPage,
    name: "Events",
    icon: "/assets/icons/event.svg",
  },
  "/faq": {
    component: FaqPage,
    name: "Faq",
    icon: "/assets/icons/contact_support.svg",
  },
  "/contactus": {
    component: ContactUsPage,
    name: "Contact Us",
    icon: "/assets/icons/mail.svg",
  },
};

// 5. Build the persistent Layout Shell once
function initLayout() {
  const app = document.getElementById("app");
  app.className = "flex min-h-screen bg-amber-50";

  // Build layout shell structure
  app.innerHTML = `
    <aside id="nav-container" class="shrink-0"></aside>
    
    <div class="flex-1 min-w-0 flex flex-col justify-between min-h-screen">
      <div id="page-content" class="flex-1 p-10"></div>
      <div id="footer-container"></div>
    </div>
  `;

  // Render static shells once
  document.getElementById("nav-container").innerHTML = Navigation();
  document.getElementById("footer-container").innerHTML = Footer();
}

// 6. Router function (Swaps page content and updates state smoothly)
function router() {
  const hash = window.location.hash.slice(1) || "/";
  const path = hash.split("?")[0];

  const route = routes[path];
  const pageFunction = route
    ? route.component
    : () => '<main class="p-6"><h1>404 - Page Not Found</h1></main>';

  // 1. Swap active page content
  document.getElementById("page-content").innerHTML = pageFunction();

  if (route && typeof route.init === "function") {
    route.init();
  }

  // 2. Update active link highlights efficiently
  updateActiveNav(path);

  // 3. Instant scroll to top on page swap
  window.scrollTo(0, 0);
}

// App Initialization
window.addEventListener("DOMContentLoaded", () => {
  initLayout();
  router();
});

window.addEventListener("hashchange", router);