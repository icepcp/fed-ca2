import Library, { initLibraryEvents } from "../lib/libraryEngine.js";
import Merch from "../lib/merch.js";

export default function MerchandisePage() {
  const menuData = Merch();

  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">
      <header>
        <h1 class="text-5xl font-bold text-amber-900">
          Our Merchandise
        </h1>
        <p class="text-lg text-amber-800 -mt-3 text-xl/6">
          Bring a piece of Banana Bliss into your everyday life with our
          exclusive café merchandise and specialty products. 
          <br>
          <br>
          Whether you're enjoying your morning coffee, shopping sustainably, or gifting a fellow dessert lover, our merchandise lets you enjoy the warmth of Banana Bliss wherever you go.
        </p>
      </header>

      ${Library(menuData)}

      <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <!-- Introduction -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            🛍️ Take the Banana Bliss Experience Home
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8">
            <p class="text-gray-700 leading-8">
              Bring a piece of Banana Bliss into your everyday life with our
              exclusive collection of café merchandise and specialty products.
              Whether you're enjoying your morning coffee, shopping sustainably,
              or gifting a fellow dessert lover, our merchandise lets you enjoy
              the warmth of Banana Bliss wherever you go.
            </p>

            <br>

            <p class="text-gray-700 leading-8">
              Every item is thoughtfully designed with our signature café
              aesthetic and crafted using quality materials that are both
              stylish and practical.
            </p>
          </div>
        </section>

        <!-- Cafe Merchandise -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            ☕ Café Merchandise
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/totebag.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Canvas Tote Bag
                </h3>
                <p class="text-gray-600 mt-2">
                  Eco-friendly canvas tote featuring the Banana Bliss logo.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  S$18.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/mug.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Ceramic Mug
                </h3>
                <p class="text-gray-600 mt-2">
                  Minimalist ceramic mug perfect for coffee, tea or hot chocolate.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  S$15.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/tumbler.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Reusable Tumbler
                </h3>
                <p class="text-gray-600 mt-2">
                  Stainless steel tumbler that keeps drinks hot or cold for hours.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  S$28.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/plate.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Dessert Plate Set
                </h3>
                <p class="text-gray-600 mt-2">
                  Elegant ceramic dessert plate for serving cakes and pastries.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  S$22.90
                </p>
              </div>
            </div>

          </div>
        </section>

        <!-- Bring Banana Bliss Home -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🏡 Bring Banana Bliss Home
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/coffeebeans.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  House Blend Coffee Beans
                </h3>
                <p class="text-gray-600 mt-2">
                  Premium roasted coffee beans that pair perfectly with our desserts.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  250g • S$16.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/jam.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Signature Banana Jam
                </h3>
                <p class="text-gray-600 mt-2">
                  Homemade banana jam with a hint of cinnamon.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  250g • S$9.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/bakingmix.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Banana Bread Baking Mix
                </h3>
                <p class="text-gray-600 mt-2">
                  Bake Banana Bliss banana bread easily at home.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  S$12.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/giftbox.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Banana Bliss Gift Box
                </h3>

                <ul class="text-gray-600 text-sm mt-2 list-disc list-inside">
                  <li>Signature Banana Jam</li>
                  <li>House Blend Coffee Beans</li>
                  <li>Ceramic Mug</li>
                  <li>Mini Banana Cookie Pack</li>
                </ul>

                <p class="font-bold text-yellow-700 mt-4">
                  S$49.90
                </p>
              </div>
            </div>

          </div>
        </section>

        <!-- Why Choose -->
        <section class="bg-yellow-100 rounded-2xl p-10">

          <h2 class="text-3xl font-bold text-amber-900 mb-6 text-center">
            💛 Why Choose Our Merchandise?
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">

            <div class="bg-white rounded-xl p-6 shadow">
              ⭐<br>
              Premium Quality Materials
            </div>

            <div class="bg-white rounded-xl p-6 shadow">
              🍌<br>
              Exclusive Banana Bliss Designs
            </div>

            <div class="bg-white rounded-xl p-6 shadow">
              🌱<br>
              Eco-Friendly & Reusable
            </div>

            <div class="bg-white rounded-xl p-6 shadow">
              🎁<br>
              Perfect Gifts
            </div>

            <div class="bg-white rounded-xl p-6 shadow">
              ☕<br>
              Bring the Café Home
            </div>

          </div>

        </section>

      </div>

    </main>
  `;
}

export function initMenuPage() {
  initLibraryEvents();
}