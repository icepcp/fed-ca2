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
            Our signature naked banana cake features soft banana sponge layers,
            smooth whipped cream, and fresh banana slices, creating a light and refreshing dessert perfect for any occasion.
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
            <p>Fresh smoothies,rich vanilla ice cream blended with bananas and 
            topped with whipped cream coffee and refreshing beverages.</p>
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
            <p>Enjoy exciting seasonal offers and exclusive deals.</p>
            <a href="#/menu"
            class="inline-block mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition">
            View Menu
          </a>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="featured-products">
        <h2>Featured Bestsellers</h2>

        <div class="product-grid">
          <div class="product-card">
            <img src="/assets/images/menu/cakes/naked-banana.jpeg" alt="Naked Banana Cake">
            <h3>Original Banana Cake</h3>
            <p>Our original favourite made fresh daily.</p>
          </div>

          <div class="product-card">
            <img src="/assets/images/menu/cakes/chocolate.jpeg" alt="Chocolate Banana Cake">
            <h3>Chocolate Banana Cake</h3>
            <p>Rich chocolate paired with sweet bananas.</p>
          </div>

          <div class="product-card">
            <img src="/assets/images/menu/drinks/smoothies/banana.jpeg" alt="Banana Smoothie">
            <h3>Banana Smoothie</h3>
            <p>Creamy, refreshing and naturally sweet.</p>
          </div>
        </div>
      </section>

      <!-- Promotion Banner -->
      <section class="promotion-banner">
        <h2>Current Promotion</h2>
        <p>
          Buy any Signature Banana Cake and enjoy
          <strong>20% OFF</strong> your second slice.
        </p>
      </section>

    </main>
  `;
}
