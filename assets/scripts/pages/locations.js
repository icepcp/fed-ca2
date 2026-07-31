export default function LocationsPage() {
  return `
    <main class="bg-amber-50 min-h-screen">

      <!-- Hero -->
      <section class="bg-yellow-100 py-16 text-center">
        <h1 class="text-5xl font-bold text-amber-900 mb-4">
          Our Locations
        </h1>

        <p class="text-lg text-amber-800 max-w-3xl mx-auto">
          Find your nearest Banana Bliss Café and enjoy freshly baked banana
          desserts, handcrafted beverages and our warm café atmosphere.
        </p>
      </section>

      <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <!-- Intro -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            📍 Find Your Nearest Banana Bliss Café
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8">
            <p class="text-gray-700 leading-8">
              No matter where you are in Singapore, there's always a Banana
              Bliss nearby. Visit us for freshly baked banana cakes,
              handcrafted beverages and a warm café experience.
            </p>

            <br>

            <p class="text-gray-700 leading-8">
              We look forward to serving you!
            </p>
          </div>
        </section>

        <!-- Locations -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🍌 Our Branches
          </h2>

          <div class="grid lg:grid-cols-2 gap-8">

            <!-- Orchard -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/orchard.jpg" class="h-64 w-full object-cover">

              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">
                  Orchard Central (Flagship)
                </h3>

                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  181 Orchard Road<br>
                  #03-15 Orchard Central<br>
                  Singapore 238896
                </p>

                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Mon–Thu: 10am – 9.30pm<br>
                  Fri–Sat: 10am – 10pm<br>
                  Sun & PH: 10am – 9.30pm
                </p>

                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Largest outlet</li>
                  <li>Full menu available</li>
                  <li>Workshops & events</li>
                  <li>Merchandise corner</li>
                </ul>

              </div>
            </div>

            <!-- Jewel -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/jewel.jpg" class="h-64 w-full object-cover">

              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">
                  Jewel Changi Airport
                </h3>

                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  78 Airport Boulevard<br>
                  #02-218 Jewel Changi Airport<br>
                  Singapore 819666
                </p>

                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Daily: 9am – 10pm
                </p>

                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Perfect for travellers</li>
                  <li>Seasonal desserts</li>
                  <li>Gift boxes available</li>
                </ul>

              </div>
            </div>

            <!-- Vivo -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/vivocity.jpg" class="h-64 w-full object-cover">

              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">
                  VivoCity
                </h3>

                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  1 HarbourFront Walk<br>
                  #02-105 VivoCity<br>
                  Singapore 098585
                </p>

                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Daily: 10am – 10pm
                </p>

                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Family-friendly seating</li>
                  <li>Weekend brunch favourite</li>
                  <li>Signature cakes & beverages</li>
                </ul>

              </div>
            </div>

            <!-- Bugis -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/bugis.jpg" class="h-64 w-full object-cover">

              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">
                  Bugis Junction
                </h3>

                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  200 Victoria Street<br>
                  #01-48 Bugis Junction<br>
                  Singapore 188021
                </p>

                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Mon–Thu: 10am – 9.30pm<br>
                  Fri–Sun: 10am – 10pm
                </p>

                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Student-friendly promotions</li>
                  <li>Quick takeaway service</li>
                  <li>Fresh pastries daily</li>
                </ul>

              </div>
            </div>

          </div>
        </section>

        <!-- Why Visit -->
        <section class="bg-yellow-100 rounded-2xl p-10">

          <h2 class="text-3xl font-bold text-amber-900 text-center mb-8">
            💛 Why Visit Banana Bliss?
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">

            <div class="bg-white rounded-xl shadow p-6">
              🍌<br>
              Freshly Baked Cakes
            </div>

            <div class="bg-white rounded-xl shadow p-6">
              ☕<br>
              Premium Coffee
            </div>

            <div class="bg-white rounded-xl shadow p-6">
              🏡<br>
              Cozy Atmosphere
            </div>

            <div class="bg-white rounded-xl shadow p-6">
              🎁<br>
              Seasonal Promotions
            </div>

            <div class="bg-white rounded-xl shadow p-6">
              🎉<br>
              Workshops & Events
            </div>

          </div>

        </section>

        <!-- Footer Message -->
        <section class="text-center">

          <h2 class="text-3xl font-bold text-amber-900 mb-4">
            ☕ Visit Us Today!
          </h2>

          <p class="text-gray-700 max-w-3xl mx-auto leading-8">
            Whether you're meeting friends, taking a coffee break or
            celebrating a special occasion, Banana Bliss is the perfect
            place to relax and enjoy freshly made banana-inspired treats.
          </p>

          <p class="mt-6 text-xl font-semibold text-yellow-700">
            We can't wait to welcome you to one of our cafés!
          </p>

        </section>

      </div>

    </main>
  `;
}