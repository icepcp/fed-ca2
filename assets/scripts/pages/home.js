export default function HomePage() {
  return `
    <main class="home-page">

      <!-- Hero Banner -->
      <section class="hero">
        <div class="hero-content">
          <span class="hero-tag">A Cozy Banana Escape</span>
          <h1 class="text-3xl/12">Experience Banana Bliss</h1>
          <p class="-mt-5">
            Freshly baked banana desserts, handcrafted drinks,
            and warm café moments made just for you.
          </p>

          <div class="hero-buttons flex gap-4">
              <a href="#/menu" class="hero-btn button">
                  Explore Menu
              </a>

              <a href="#/about" class="secondary-btn button">
                  About Us
              </a>
          </div>
        </div>
      </section>

      <!-- Welcome Section -->
      <section class="welcome">
        <div class="welcome-text">
          <h2>Warm Vibes. Quality Ingredients.</h2>

          <p>
            At Banana Bliss, we believe every dessert should be made with
            fresh bananas, quality ingredients and lots of love.
            Whether you're craving a slice of our signature banana cake
            or a refreshing smoothie, we promise a cosy café experience
            you'll always remember.
          </p>
        </div>
      </section>

      <!-- Quick Categories -->
     <div class="category-card">
        <img src="/assets/images/menu/cakes/naked-banana.jpeg" alt="Banana Cakes">

         <div>
           <h3>Signature Cakes</h3>

           <p>
            Discover our signature banana cakes, freshly baked with ripe bananas and carefully selected ingredients. From timeless favourites to indulgent creations, every slice is made to bring out the naturally sweet and comforting flavour of banana.
           </p>

           <a href="#/menu"
            class="inline-block mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition">
            View Menu
          </a>
           
       </div>
      </div>

        

        <div class="category-card">
          <div>
            <h3>Drinks</h3>
            <p>Refresh yourself with our signature banana drinks, blended with creamy, delicious ingredients for the perfect treat. From fruity favourites to rich and indulgent blends, there’s a drink for every banana lover.</p>
           <a href="#/menu"
            class="inline-block mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition">
            View Menu
          </a>

          </div>
          <img src="/assets/images/menu/drinks/milkshakes/banana.jpeg" alt="Drinks">
        </div>

        <div class="category-card">
          <img src="/assets/images/promos/promo.jpeg" alt="Promotions">
          <div>
            <h3>Promotions</h3>
            <p>Enjoy more of your favourite banana treats for less! Discover our latest deals, seasonal specials, and exclusive offers on selected cakes, drinks, and more.</p>
            <a href="#/promotions"
            class="inline-block mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition">
            View Promos
          </a>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-8 mb-6">Featured Bestsellers</h2>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/menu/cakes/naked-banana.jpeg" alt="Naked Banana Cake" class="w-full aspect-square object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900 mb-1">Naked Banana Cake</h3>
              <p class="text-gray-700 leading-6 text-sm">A soft and moist banana cake, lightly layered with smooth cream.</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/menu/cakes/chocolate.jpeg" alt="Chocolate Banana Cake" class="w-full aspect-square object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900 mb-1">Chocolate Banana Cake</h3>
              <p class="text-gray-700 leading-6 text-sm">Rich chocolate paired with sweet bananas.</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/menu/drinks/smoothies/banana.jpeg" alt="Banana Smoothie" class="w-full aspect-square object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900 mb-1">Banana Smoothie</h3>
              <p class="text-gray-700 leading-6 text-sm">Creamy, refreshing and naturally sweet.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Promotion Banner -->
      <section class="rounded-2xl p-8 md:p-12 text-center mt-8" style="background-color:#A9752E;">
        <h2 class="text-3xl md:text-5xl font-bold mb-4" style="color:#FFFFFF;">Current Promotion</h2>
        <p class="text-lg leading-8 max-w-2xl mx-auto mb-6" style="color:#FFEFD1;">
          Buy any Signature Banana Cake and enjoy <strong style="color:#FFFFFF;">20% OFF</strong> your second slice.
        </p>
        <a href="#/promotions" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
          See All Promotions
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}