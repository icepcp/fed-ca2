export default function AboutPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 leading-tight mt-4">
          How Banana Bliss Began
        </h1>
      </header>

      <!-- Hero -->
      <section>
        <div class="grid md:grid-cols-3 gap-6 md:gap-8 mt-4">
          <p class="md:col-span-2 text-base md:text-lg text-amber-800 leading-8">
            Banana Bliss started with a simple idea — to turn one of the world's most loved fruits into
            delicious desserts that bring people together. Inspired by homemade banana cakes and the comforting
            feeling of a neighbourhood café, our founders dreamed of creating a place where every visit feels
            warm, welcoming and memorable.
          </p>
          <div class="rounded-2xl p-6 bg-yellow-100 border-2 border-amber-200">
            <p class="font-semibold text-lg text-amber-900 leading-snug">
              "We chose bananas because they're naturally sweet, nutritious and endlessly versatile."
            </p>
          </div>
        </div>

        <p class="text-base md:text-lg text-gray-700 leading-8 mt-6 max-w-3xl">
          From our signature banana cakes to refreshing smoothies and handcrafted drinks, every item is carefully
          created to celebrate the flavour and comfort that bananas bring. Today, Banana Bliss is more than just
          a café — it's a place where friends and families can relax, connect and enjoy freshly made treats.
        </p>
      </section>

      <!-- Mission -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-4">Our Mission</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl">
          At Banana Bliss, our mission is to create delicious banana-inspired desserts and drinks using quality
          ingredients while providing every customer with a warm and memorable café experience.
        </p>
      </section>

      <!-- Values grid -->
      <section>
        <h3 class="text-2xl md:text-3xl font-bold text-amber-900 mb-6">Our Values</h3>
        <div class="grid sm:grid-cols-2 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Quality</h4>
            <p class="text-gray-700 leading-7">
              We carefully select fresh ingredients to ensure every dessert and drink is made with the highest
              standards of taste and freshness.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Warm Hospitality</h4>
            <p class="text-gray-700 leading-7">
              We believe great food tastes even better with friendly service. Every customer is welcomed with
              kindness and treated like part of the Banana Bliss family.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13 11 11"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Sustainability</h4>
            <p class="text-gray-700 leading-7">
              We are committed to reducing food waste, using eco-friendly packaging where possible, and sourcing
              ingredients responsibly.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Creativity</h4>
            <p class="text-gray-700 leading-7">
              We constantly explore new banana-inspired recipes and seasonal specials to bring exciting flavours
              to our customers.
            </p>
          </div>

        </div>
      </section>

      <!-- What makes us unique -->
      <section class="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
        <span class="inline-block text-xs font-semibold bg-yellow-100 text-amber-700 border border-amber-200 rounded-full px-3 py-1 mb-4">
          The Difference
        </span>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-5">What Makes Banana Bliss Unique?</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
          Unlike traditional cafés, Banana Bliss specialises in banana-inspired desserts and beverages. Our menu
          celebrates the versatility of bananas through signature cakes, refreshing drinks, and creative seasonal
          treats. Combined with our cozy café atmosphere and friendly service, every visit is designed to be both
          relaxing and memorable.
        </p>
      </section>

      <!-- Experience -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-8">The Banana Bliss Experience</h2>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="text-3xl font-bold text-amber-600">01</span>
            <h3 class="text-xl font-bold text-amber-900 mt-3 mb-2">Warm Atmosphere</h3>
            <p class="text-gray-700 leading-7">
              Step into Banana Bliss and you'll be greeted by soft lighting, warm colours and the comforting
              aroma of freshly baked banana desserts — a welcoming space to unwind, catch up with friends
              or enjoy a quiet moment.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="text-3xl font-bold text-amber-600">02</span>
            <h3 class="text-xl font-bold text-amber-900 mt-3 mb-2">Quality Ingredients</h3>
            <p class="text-gray-700 leading-7">
              Every dessert and drink begins with carefully selected bananas and fresh ingredients. We bake our
              cakes daily and prepare each beverage with care for the perfect balance of flavour and freshness.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="text-3xl font-bold text-amber-600">03</span>
            <h3 class="text-xl font-bold text-amber-900 mt-3 mb-2">Friendly Service</h3>
            <p class="text-gray-700 leading-7">
              Our team is passionate about creating enjoyable experiences for every guest — always happy
              to recommend our favourites and make your visit as pleasant as possible.
            </p>
          </div>

        </div>
      </section>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">
        <a href="#/locations" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-white text-amber-900 border-2 border-amber-200 hover:-translate-y-0.5 transition">
          Visit Us
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}