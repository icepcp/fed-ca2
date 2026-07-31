export default function ReviewsPage() {
  return `
    <main class="bg-amber-50 min-h-screen">

      <!-- Hero Section -->
      <section class="bg-yellow-100 py-16 text-center">
        <h1 class="text-5xl font-bold text-amber-900 mb-4">
          Customer Reviews
        </h1>

        <p class="text-lg text-amber-800 max-w-3xl mx-auto">
          See why our customers love Banana Bliss and discover their favourite
          desserts and drinks.
        </p>
      </section>

      <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <!-- Overall Rating -->
        <section class="text-center bg-white rounded-xl shadow-lg p-10">

          <h2 class="text-3xl font-bold text-amber-900 mb-4">
            ⭐ Overall Rating
          </h2>

          <p class="text-6xl font-bold text-yellow-600">
            4.9 / 5.0
          </p>

          <p class="text-gray-600 mt-3">
            Based on <strong>248 customer reviews</strong>
          </p>

          <p class="italic text-gray-700 mt-6">
            "Loved by our customers for our freshly baked banana desserts and
            warm café atmosphere."
          </p>

        </section>

        <!-- Reviews -->
        <section>

          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            💬 What Our Guests Say
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="text-yellow-500 text-xl">★★★★★</div>
              <h3 class="text-xl font-bold text-amber-900 mt-2">
                Victoria Neo
              </h3>
              <p class="text-sm text-yellow-700 font-semibold">
                Favourite: Original Banana Cake
              </p>
              <p class="text-gray-600 mt-4">
                "The Original Banana Cake was incredibly soft and moist. The
                cream cheese frosting paired perfectly with the fresh banana
                flavour. I'll definitely be coming back!"
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="text-yellow-500 text-xl">★★★★★</div>
              <h3 class="text-xl font-bold text-amber-900 mt-2">
                Tee Jia Wen
              </h3>
              <p class="text-sm text-yellow-700 font-semibold">
                Favourite: Chocolate Banana Cake
              </p>
              <p class="text-gray-600 mt-4">
                "The Chocolate Banana Cake exceeded my expectations. Rich
                chocolate with light and fluffy banana layers."
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="text-yellow-500 text-xl">★★★★★</div>
              <h3 class="text-xl font-bold text-amber-900 mt-2">
                Tan Ming Rui
              </h3>
              <p class="text-sm text-yellow-700 font-semibold">
                Favourite: Banana Milkshake
              </p>
              <p class="text-gray-600 mt-4">
                "Creamy, refreshing and made with real bananas. The perfect
                drink with a slice of cake."
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="text-yellow-500 text-xl">★★★★★</div>
              <h3 class="text-xl font-bold text-amber-900 mt-2">
                Aung Kaung Myat
              </h3>
              <p class="text-sm text-yellow-700 font-semibold">
                Favourite: Walnut Banana Loaf
              </p>
              <p class="text-gray-600 mt-4">
                "Everything tasted fresh. The Walnut Banana Loaf was moist and
                the crunchy walnuts made it even better."
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="text-yellow-500 text-xl">★★★★★</div>
              <h3 class="text-xl font-bold text-amber-900 mt-2">
                Ethan Ong
              </h3>
              <p class="text-sm text-yellow-700 font-semibold">
                Favourite: Banana Waffles
              </p>
              <p class="text-gray-600 mt-4">
                "Crispy on the outside, fluffy inside and served with fresh
                bananas and vanilla ice cream."
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="text-yellow-500 text-xl">★★★★★</div>
              <h3 class="text-xl font-bold text-amber-900 mt-2">
                Chloe Tan
              </h3>
              <p class="text-sm text-yellow-700 font-semibold">
                Favourite: Banana Smoothie
              </p>
              <p class="text-gray-600 mt-4">
                "The Banana Smoothie tasted so fresh and wasn't overly sweet.
                Perfect for an afternoon pick-me-up."
              </p>
            </div>

          </div>

        </section>

        <!-- Customer Favourites -->
        <section>

          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🍌 Customer Favourites
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Original Banana Cake
              </h3>

              <p class="text-yellow-600 font-bold text-2xl mt-3">
                ⭐ 4.9 / 5
              </p>

              <p class="text-gray-600 mt-4">
                Our best-selling cake, loved for its soft texture and homemade flavour.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Banana Smoothie
              </h3>

              <p class="text-yellow-600 font-bold text-2xl mt-3">
                ⭐ 4.8 / 5
              </p>

              <p class="text-gray-600 mt-4">
                A refreshing favourite made with fresh bananas and creamy milk.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Chocolate Banana Cake
              </h3>

              <p class="text-yellow-600 font-bold text-2xl mt-3">
                ⭐ 4.9 / 5
              </p>

              <p class="text-gray-600 mt-4">
                Rich chocolate layers balanced with naturally sweet bananas.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Banana Waffles
              </h3>

              <p class="text-yellow-600 font-bold text-2xl mt-3">
                ⭐ 4.8 / 5
              </p>

              <p class="text-gray-600 mt-4">
                Golden waffles served with fresh bananas and vanilla ice cream.
              </p>
            </div>

          </div>

        </section>

        <!-- Why Customers Love Us -->
        <section class="bg-yellow-100 rounded-2xl p-10">

          <h2 class="text-3xl font-bold text-amber-900 text-center mb-8">
            ❤️ Why Customers Love Banana Bliss
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow p-6 text-center">
              🍰<br>
              Freshly Baked Desserts
            </div>

            <div class="bg-white rounded-xl shadow p-6 text-center">
              😊<br>
              Friendly & Welcoming Staff
            </div>

            <div class="bg-white rounded-xl shadow p-6 text-center">
              ☕<br>
              Cozy Café Atmosphere
            </div>

            <div class="bg-white rounded-xl shadow p-6 text-center">
              🌟<br>
              High-Quality Ingredients
            </div>

            <div class="bg-white rounded-xl shadow p-6 text-center">
              📸<br>
              Beautiful Presentation
            </div>

            <div class="bg-white rounded-xl shadow p-6 text-center">
              💰<br>
              Great Value for Money
            </div>

          </div>

        </section>

        <!-- Featured Testimonial -->
        <section class="bg-white rounded-xl shadow-lg p-10">

          <h2 class="text-3xl font-bold text-amber-900 mb-6 text-center">
            📢 Featured Testimonial
          </h2>

          <blockquote class="italic text-lg text-gray-700 leading-8 text-center max-w-4xl mx-auto">
            "Banana Bliss has quickly become my favourite café. From the warm
            atmosphere to the delicious banana desserts, every visit feels
            relaxing and memorable. The staff are friendly, the food is
            consistently fresh, and there's always something new to try. I
            highly recommend the Signature Banana Cake and Banana Smoothie!"
          </blockquote>

          <p class="text-center mt-6 font-bold text-yellow-700">
            — Emily Tan, Loyal Customer
          </p>

        </section>

      </div>

    </main>
  `;
}