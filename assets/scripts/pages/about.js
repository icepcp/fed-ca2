export default function AboutPage() {
  return `
    <main class="bg-amber-50 min-h-screen">

      <!-- Hero Section -->
      <section class="bg-yellow-100 py-16 text-center">
        <h1 class="text-5xl font-bold text-amber-900 mb-4">
          About Banana Bliss
        </h1>
        <p class="text-lg text-amber-800 max-w-3xl mx-auto">
          Discover our story, our passion for banana-inspired desserts,
          and what makes every visit to Banana Bliss a warm and memorable experience.
        </p>
      </section>

      <div class="max-w-6xl mx-auto px-6 py-12 space-y-16">

        <!-- Our Story -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            🍌 Our Story
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8">
            <h3 class="text-2xl font-semibold text-yellow-700 mb-4">
              How Banana Bliss Began
            </h3>

            <p class="text-gray-700 leading-8">
              Banana Bliss started with a simple idea—to turn one of the world's
              most loved fruits into delicious desserts that bring people
              together. Inspired by homemade banana cakes and the comforting
              feeling of a neighbourhood café, our founders dreamed of creating
              a place where every visit feels warm, welcoming and memorable.
            </p>

            <br>

            <p class="text-gray-700 leading-8">
              We chose bananas as the heart of our menu because they are
              naturally sweet, nutritious and incredibly versatile. From our
              signature banana cakes to refreshing smoothies and handcrafted
              drinks, every item is carefully created to celebrate the flavour
              and comfort that bananas bring.
            </p>

            <br>

            <p class="text-gray-700 leading-8">
              Today, Banana Bliss is more than just a café—it's a place where
              friends and families can relax, connect and enjoy freshly made
              treats.
            </p>
          </div>
        </section>

        <!-- Mission & Values -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            🌟 Our Mission & Values
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <h3 class="text-2xl font-semibold text-yellow-700 mb-4">
              Our Mission
            </h3>

            <p class="text-gray-700 leading-8">
              At Banana Bliss, our mission is to create delicious
              banana-inspired desserts and drinks using quality ingredients
              while providing every customer with a warm and memorable café
              experience.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-xl font-bold text-amber-900 mb-3">
                🥇 Quality
              </h3>

              <p class="text-gray-700">
                We carefully select fresh ingredients to ensure every dessert
                and drink is made with the highest standards of taste and
                freshness.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-xl font-bold text-amber-900 mb-3">
                ❤️ Warm Hospitality
              </h3>

              <p class="text-gray-700">
                We believe great food tastes even better with friendly service.
                Every customer is welcomed with kindness and treated like part
                of the Banana Bliss family.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-xl font-bold text-amber-900 mb-3">
                🌱 Sustainability
              </h3>

              <p class="text-gray-700">
                We are committed to reducing food waste, using eco-friendly
                packaging where possible and sourcing ingredients responsibly.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-xl font-bold text-amber-900 mb-3">
                💡 Creativity
              </h3>

              <p class="text-gray-700">
                We constantly explore new banana-inspired recipes and seasonal
                specials to bring exciting flavours to our customers.
              </p>
            </div>

          </div>
        </section>

        <!-- What Makes Us Unique -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            ✨ What Makes Banana Bliss Unique?
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8">
            <p class="text-gray-700 leading-8">
              Unlike traditional cafés, Banana Bliss specialises in
              banana-inspired desserts and beverages. Our menu celebrates the
              versatility of bananas through signature cakes, refreshing drinks
              and creative seasonal treats.
            </p>

            <br>

            <p class="text-gray-700 leading-8">
              Combined with our cosy café atmosphere and friendly service, every
              visit is designed to be both relaxing and memorable.
            </p>
          </div>
        </section>

        <!-- Banana Bliss Experience -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            ☕ The Banana Bliss Experience
          </h2>

          <div class="grid md:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-xl font-bold text-yellow-700 mb-3">
                🌞 Warm Atmosphere
              </h3>

              <p class="text-gray-700">
                Step into Banana Bliss and you'll be greeted by soft lighting,
                warm colours and the comforting aroma of freshly baked banana
                desserts. It's the perfect place to relax and unwind.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-xl font-bold text-yellow-700 mb-3">
                🍰 Quality Ingredients
              </h3>

              <p class="text-gray-700">
                Every dessert and drink begins with carefully selected bananas
                and fresh ingredients. We bake our cakes daily to deliver the
                perfect balance of flavour and freshness.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-xl font-bold text-yellow-700 mb-3">
                😊 Friendly Service
              </h3>

              <p class="text-gray-700">
                Our team is passionate about creating enjoyable experiences for
                every guest. Whether you're visiting for the first time or
                returning again, we're always happy to help.
              </p>
            </div>

          </div>
        </section>

      </div>

    </main>
  `;
}