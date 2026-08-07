export default function CustomerReviews() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <h1 class="text-5xl font-bold text-amber-900">
          What Our Guests Say
        </h1>
        <p class="text-lg text-amber-800 -mt-3 text-xl/6">
          See why our customers love Banana Bliss and discover their favourite desserts and drinks.
        </p>
      </header>

      <!-- Overall Rating -->
      <section class="relative rounded-2xl overflow-hidden shadow-md">
        <img src="/assets/images/reviews/reviews.png" alt="Banana Bliss café counter" class="w-full h-72 md:h-96 object-cover" />
        <div class="absolute inset-0 bg-black/35"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p class="text-5xl md:text-6xl font-bold drop-shadow-md" style="color:#FFFFFB;">
            4.9 <span class="text-2xl md:text-3xl" style="color:#FFFFFB;">/ 5.0</span>
          </p>
          <p class="mt-3 drop-shadow-md" style="color:#FFFFFB;">
            Based on <strong>248 customer reviews</strong>
          </p>
          <p class="italic mt-6 max-w-2xl drop-shadow-md" style="color:#FFFFFB;">
            "Loved by our customers for our freshly baked banana desserts and warm café atmosphere."
          </p>
        </div>
      </section>

      <!-- Guest Reviews -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Recent Guest Reviews</h2>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2 mb-6">
          <button type="button" class="review-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-amber-400 text-amber-950" data-filter="all">All</button>
          <button type="button" class="review-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-white text-amber-900 border border-amber-200" data-filter="cakes">Cakes</button>
          <button type="button" class="review-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-white text-amber-900 border border-amber-200" data-filter="drinks">Drinks</button>
          <button type="button" class="review-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-white text-amber-900 border border-amber-200" data-filter="desserts-pastries">Pastries & Desserts</button>
        </div>

        <!-- Carousel -->
        <div class="relative">
          <div id="reviewsTrack" class="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4" style="scrollbar-width: none;">

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="cakes">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400 font-bold text-amber-950">VN</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Victoria Neo</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Naked Banana Cake</p>
              <p class="text-gray-700 leading-7">
                "The Naked Banana Cake was incredibly soft and moist. It wasn't overly sweet, and the cream
                cheese frosting paired perfectly with the fresh banana flavour. I'll definitely be coming back!"
              </p>
            </div>

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="cakes">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B] font-bold text-[#FDF6DC]">TJ</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Tee Jia Wen</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Chocolate Banana Cake</p>
              <p class="text-gray-700 leading-7">
                "The Chocolate Banana Cake exceeded my expectations. The chocolate was rich while the banana
                kept it light and fluffy. Easily one of the best cakes I've had."
              </p>
            </div>

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="drinks">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400 font-bold text-amber-950">TM</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Tan Ming Rui</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Banana Milkshake</p>
              <p class="text-gray-700 leading-7">
                "The Banana Milkshake was creamy, refreshing and made with real bananas. It was the perfect
                drink to enjoy with a slice of cake."
              </p>
            </div>

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="cakes">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B] font-bold text-[#FDF6DC]">AK</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Aung Kaung Myat</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Walnut Banana Loaf</p>
              <p class="text-gray-700 leading-7">
                "I love how fresh everything tastes here. The Walnut Banana Loaf was packed with flavour and
                the crunchy walnuts made it even better."
              </p>
            </div>

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="desserts-pastries">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400 font-bold text-amber-950">EO</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Ethan Ong</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Banana Waffles</p>
              <p class="text-gray-700 leading-7">
                "The waffles were crispy on the outside and fluffy inside. Topped with bananas, vanilla ice
                cream and chocolate sauce — it was absolutely delicious."
              </p>
            </div>

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="drinks">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B] font-bold text-[#FDF6DC]">CT</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Chloe Tan</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Banana Smoothie</p>
              <p class="text-gray-700 leading-7">
                "The Banana Smoothie tasted so fresh and wasn't overly sweet. It was the perfect afternoon
                pick-me-up."
              </p>
            </div>

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="desserts-pastries">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400 font-bold text-amber-950">SL</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Sarah Lim</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Banana Pudding</p>
              <p class="text-gray-700 leading-7">
                "Such a comforting dessert. The layers of biscuit and cream with fresh banana slices reminded
                me of home. Will definitely order again."
              </p>
            </div>

            <div class="review-card shrink-0 snap-start w-[85%] sm:w-[45%] lg:w-[30%] bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 transition-transform duration-300 hover:scale-105" data-category="drinks">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B] font-bold text-[#FDF6DC]">MW</div>
              <div class="flex gap-0.5 text-amber-500 mb-1">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>'.repeat(5)}
              </div>
              <h3 class="text-xl font-bold text-amber-900">Marcus Wong</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Favourite: Iced Banana Latte</p>
              <p class="text-gray-700 leading-7">
                "My daily go-to now. The banana flavour actually comes through instead of just tasting like
                regular coffee with a hint of sweetness. Great balance."
              </p>
            </div>

          </div>

          <button type="button" id="reviewsPrev" class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-amber-100 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button type="button" id="reviewsNext" class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-amber-100 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </section>

      <!-- Customer Favourites -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Customer Favourites</h2>

        <div class="grid lg:grid-cols-2 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-105">
            <img src="/assets/images/menu/cakes/naked-banana.jpeg" alt="Naked Banana Cake" class="w-full aspect-square object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900">Naked Banana Cake</h3>
              <p class="flex items-center justify-center gap-1 text-amber-600 font-bold text-2xl mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
                4.9 / 5
              </p>
              <p class="text-gray-600 mt-3 text-sm">
                Our best-selling cake, loved for its soft texture and homemade flavour.
              </p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-105">
            <img src="/assets/images/menu/drinks/smoothies/banana.jpeg" alt="Banana Smoothie" class="w-full aspect-square object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900">Banana Smoothie</h3>
              <p class="flex items-center justify-center gap-1 text-amber-600 font-bold text-2xl mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
                4.8 / 5
              </p>
              <p class="text-gray-600 mt-3 text-sm">
                A refreshing favourite made with fresh bananas and creamy milk.
              </p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-105">
            <img src="/assets/images/menu/cakes/chocolate.jpeg" alt="Chocolate Banana Cake" class="w-full aspect-square object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900">Chocolate Banana Cake</h3>
              <p class="flex items-center justify-center gap-1 text-amber-600 font-bold text-2xl mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
                4.9 / 5
              </p>
              <p class="text-gray-600 mt-3 text-sm">
                Rich chocolate layers balanced with naturally sweet bananas.
              </p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-105">
            <img src="/assets/images/menu/desserts/waffle.jpeg" alt="Banana Waffles" class="w-full aspect-square object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900">Banana Waffles</h3>
              <p class="flex items-center justify-center gap-1 text-amber-600 font-bold text-2xl mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
                4.8 / 5
              </p>
              <p class="text-gray-600 mt-3 text-sm">
                Golden waffles served with fresh bananas and vanilla ice cream.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Why Customers Love Us -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6 text-center">Why Customers Love Banana Bliss</h2>

        <div class="flex flex-wrap justify-center gap-3">
          <span class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-100 text-amber-900 font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11a9 9 0 0 1 18 0v6a2 2 0 0 1-2 2h-1v-8h3"/><path d="M3 11v6a2 2 0 0 0 2 2h1v-8H3"/><path d="M3 11a9 9 0 0 1 9-9"/></svg>
            Freshly baked desserts every day
          </span>
          <span class="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[#FDF6DC] font-medium" style="background-color:#59571B;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Friendly and welcoming staff
          </span>
          <span class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-100 text-amber-900 font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
            Cozy café atmosphere
          </span>
          <span class="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[#FDF6DC] font-medium" style="background-color:#59571B;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
            High-quality ingredients
          </span>
          <span class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-100 text-amber-900 font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Beautiful presentation
          </span>
          <span class="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[#FDF6DC] font-medium" style="background-color:#59571B;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v2M12 16v2"/><path d="M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5S10.34 12 12 12s3 1.12 3 2.5-1.34 2.5-3 2.5-3-1.12-3-2.5"/></svg>
            Great value for money
          </span>
        </div>
      </section>

      <!-- Featured Testimonial -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">In Their Words</h2>

        <div class="rounded-2xl p-6 md:p-10 bg-yellow-100 border-2 border-amber-200">
          <blockquote class="italic text-lg text-amber-900 leading-8 text-center max-w-3xl mx-auto">
            "Banana Bliss has quickly become my favourite café. From the warm atmosphere to the delicious
            banana desserts, every visit feels relaxing and memorable. The staff are friendly, the food is
            consistently fresh, and there's always something new to try. I highly recommend the Signature
            Banana Cake and Banana Smoothie!"
          </blockquote>
          <p class="text-center mt-6 font-bold text-[#59571B]">— Emily Tan, Loyal Customer</p>
        </div>
      </section>

      <!-- Write a Review -->
      <section class="bg-[#FFFFFB] rounded-2xl shadow-md p-8 md:p-12">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-2 text-center">Write a Review</h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          We'd love to hear what you think! Tell us about your visit and your favourite Banana Bliss treat.
        </p>

        <form
          id="reviewForm"
          novalidate
          onsubmit="return window.validateReviewForm(event)"
          class="max-w-2xl mx-auto space-y-6"
        >

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="reviewName" class="block text-sm font-semibold text-amber-900 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="reviewName"
                name="reviewName"
                placeholder="e.g. Victoria Neo"
                class="w-full rounded-lg border border-amber-200 px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
              <p class="error-msg hidden text-sm text-red-500 mt-1">Please enter your name.</p>
            </div>

            <div>
              <label for="reviewFavourite" class="block text-sm font-semibold text-amber-900 mb-1">
                Favourite Item
              </label>
              <select
                id="reviewFavourite"
                name="reviewFavourite"
                class="w-full rounded-lg border border-amber-200 px-4 py-2.5 text-gray-700 bg-[#FFFFFB] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              >
                <option value="">Select an item</option>

                <optgroup label="Signature Cakes">
                  <option value="naked-banana-cake">Naked Banana Cake</option>
                  <option value="chocolate-banana-cake">Chocolate Banana Cake</option>
                  <option value="caramel-banana-cake">Caramel Banana Cake</option>
                  <option value="walnut-banana-loaf">Walnut Banana Loaf</option>
                </optgroup>

                <optgroup label="Coffee & Lattes">
                  <option value="iced-banana-latte">Iced Banana Latte</option>
                  <option value="signature-latte">Signature Latte</option>
                  <option value="cappuccino">Cappuccino</option>
                </optgroup>

                <optgroup label="Smoothies">
                  <option value="classic-banana-smoothie">Classic Banana Smoothie</option>
                  <option value="strawberry-banana-smoothie">Strawberry Banana Smoothie</option>
                  <option value="tropical-banana-smoothie">Tropical Banana Smoothie</option>
                </optgroup>

                <optgroup label="Milkshakes">
                  <option value="banana-milkshake">Banana Milkshake</option>
                  <option value="chocolate-banana-milkshake">Chocolate Banana Milkshake</option>
                </optgroup>

                <optgroup label="Freshly Baked Pastries">
                  <option value="banana-cupcake">Banana Cupcake</option>
                  <option value="sweet-bliss-cookies">Sweet Bliss Cookies</option>
                </optgroup>

                <optgroup label="Sweet Desserts">
                  <option value="banana-waffles">Banana Waffles</option>
                  <option value="banana-pudding">Banana Pudding</option>
                </optgroup>

                <optgroup label="Seasonal Specials">
                  <option value="banana-biscoff-cake">Banana Biscoff Cake</option>
                  <option value="summer-banana-mango-smoothie">Summer Banana Mango Smoothie</option>
                </optgroup>

                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <span class="block text-sm font-semibold text-amber-900 mb-2">
              Your Rating
            </span>
            <fieldset class="flex flex-row-reverse gap-1 justify-end w-fit">
              <input type="radio" id="star5" name="rating" value="5" class="peer/star5 hidden" />
              <label for="star5" class="cursor-pointer text-gray-300 peer-checked/star5:text-amber-500 hover:text-amber-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
              </label>

              <input type="radio" id="star4" name="rating" value="4" class="peer/star4 hidden" />
              <label for="star4" class="cursor-pointer text-gray-300 peer-checked/star5:text-amber-500 peer-checked/star4:text-amber-500 hover:text-amber-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
              </label>

              <input type="radio" id="star3" name="rating" value="3" class="peer/star3 hidden" />
              <label for="star3" class="cursor-pointer text-gray-300 peer-checked/star5:text-amber-500 peer-checked/star4:text-amber-500 peer-checked/star3:text-amber-500 hover:text-amber-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
              </label>

              <input type="radio" id="star2" name="rating" value="2" class="peer/star2 hidden" />
              <label for="star2" class="cursor-pointer text-gray-300 peer-checked/star5:text-amber-500 peer-checked/star4:text-amber-500 peer-checked/star3:text-amber-500 peer-checked/star2:text-amber-500 hover:text-amber-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
              </label>

              <input type="radio" id="star1" name="rating" value="1" class="peer/star1 hidden" />
              <label for="star1" class="cursor-pointer text-gray-300 peer-checked/star5:text-amber-500 peer-checked/star4:text-amber-500 peer-checked/star3:text-amber-500 peer-checked/star2:text-amber-500 peer-checked/star1:text-amber-500 hover:text-amber-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
              </label>
            </fieldset>
          </div>

          <div>
            <label for="reviewText" class="block text-sm font-semibold text-amber-900 mb-1">
              Your Review
            </label>
            <textarea
              id="reviewText"
              name="reviewText"
              rows="5"
              placeholder="Tell us about your visit..."
              class="w-full rounded-lg border border-amber-200 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
            ></textarea>
            <p class="error-msg hidden text-sm text-red-500 mt-1">Please write a short review.</p>
          </div>

          <div>
            <button
              type="submit"
              class="w-full sm:w-auto inline-flex items-center justify-center rounded-full font-semibold px-10 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition"
            >
              Submit Review
            </button>
          </div>

        </form>
      </section>

      <!-- Toast Notification -->
      <div
        id="reviewToast"
        class="fixed bottom-6 right-6 z-50 opacity-0 translate-y-4 pointer-events-none transition-all duration-300 flex items-center gap-3 rounded-2xl shadow-xl px-5 py-4"
        style="background-color:#59571B;"
      >
        <div class="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-amber-400">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <div>
          <p class="font-bold text-sm" style="color:#FDF6DC;">Review Submitted!</p>
          <p class="text-xs" style="color:#E7E4CC;">Thanks for sharing — we appreciate it 🍌</p>
        </div>
      </div>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">
        <a href="#/locations" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-[#FFFFFB] text-amber-900 border-2 border-amber-200 hover:-translate-y-0.5 transition">
          Visit Us
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}

export function initCustomerReviews() {
  // Filter pills
  var filterButtons = document.querySelectorAll(".review-filter-btn");
  var reviewCards = document.querySelectorAll(".review-card");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter");

      filterButtons.forEach(function (b) {
        b.classList.remove("bg-amber-400", "text-amber-950");
        b.classList.add("bg-white", "text-amber-900", "border", "border-amber-200");
      });
      btn.classList.remove("bg-white", "text-amber-900", "border", "border-amber-200");
      btn.classList.add("bg-amber-400", "text-amber-950");

      reviewCards.forEach(function (card) {
        var matches = filter === "all" || card.getAttribute("data-category") === filter;
        card.style.display = matches ? "" : "none";
      });
    });
  });

  // Carousel arrows
  var track = document.getElementById("reviewsTrack");
  var prevBtn = document.getElementById("reviewsPrev");
  var nextBtn = document.getElementById("reviewsNext");

  if (track && prevBtn && nextBtn) {
    var scrollAmount = function () {
      var card = track.querySelector(".review-card");
      return card ? card.offsetWidth + 20 : 300;
    };

    prevBtn.addEventListener("click", function () {
      track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });
    nextBtn.addEventListener("click", function () {
      track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });
  }

  // Form validation + toast confirmation
  window.validateReviewForm = function (event) {
    event.preventDefault();

    var form = document.getElementById("reviewForm");
    var isValid = true;

    var fields = [
      {
        el: document.getElementById("reviewName"),
        test: function (v) { return v.trim().length > 0; }
      },
      {
        el: document.getElementById("reviewText"),
        test: function (v) { return v.trim().length > 0; }
      }
    ];

    fields.forEach(function (field) {
      var errorEl = field.el.parentElement.querySelector(".error-msg");
      var valid = field.test(field.el.value);

      if (!valid) {
        isValid = false;
        field.el.classList.add("border-red-400");
        field.el.classList.remove("border-amber-200");
        if (errorEl) errorEl.classList.remove("hidden");
      } else {
        field.el.classList.remove("border-red-400");
        field.el.classList.add("border-amber-200");
        if (errorEl) errorEl.classList.add("hidden");
      }
    });

    var toast = document.getElementById("reviewToast");

    if (isValid) {
      window.handleReviewSubmit && window.handleReviewSubmit(event);
      form.reset();

      toast.classList.remove("opacity-0", "translate-y-4");
      toast.classList.add("opacity-100", "translate-y-0");

      setTimeout(function () {
        toast.classList.remove("opacity-100", "translate-y-0");
        toast.classList.add("opacity-0", "translate-y-4");
      }, 2000);
    }

    return false;
  };
}