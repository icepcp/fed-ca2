import Library, { initLibraryEvents } from "../lib/libraryEngine.js";
import Menu from "../lib/menu.js";

export default function MenuPage() {
  const menuData = Menu();

  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <h1 class="text-5xl font-bold text-amber-900">
          Our Menu
        </h1>
        <p class="text-lg text-amber-800 -mt-3 text-xl/6">
          Freshly baked banana-inspired desserts and handcrafted drinks made with
          quality ingredients for every occasion.
        </p>
      </header>

      ${Library(menuData)}

      <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <!-- Food -->
        <section>
          <h2 class="text-4xl font-bold text-amber-900 mb-4">
            🍰 Food Menu
          </h2>

          <p class="text-gray-700 mb-8 leading-8">
            At Banana Bliss, we serve a variety of freshly made banana-inspired
            treats that are perfect for any time of the day. From our signature
            cakes to indulgent desserts, every item is carefully crafted using
            fresh ingredients to deliver the perfect balance of sweetness and comfort.
          </p>

          <h3 class="text-2xl font-semibold text-yellow-700 mb-6">
            Signature Cakes
          </h3>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/originalbanana.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h4 class="text-xl font-bold text-amber-900">Original Banana Cake</h4>
                <p class="text-gray-600 mt-2">
                  Classic banana cake topped with smooth cream cheese frosting.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  Slice: S$7.90<br>
                  Whole Cake: S$36.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/chocolatebanana.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h4 class="text-xl font-bold text-amber-900">Chocolate Banana Cake</h4>
                <p class="text-gray-600 mt-2">
                  Rich chocolate sponge layered with fresh banana cream.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  Slice: S$8.50<br>
                  Whole Cake: S$39.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/walnutbanana.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h4 class="text-xl font-bold text-amber-900">Walnut Banana Loaf</h4>
                <p class="text-gray-600 mt-2">
                  Moist banana loaf baked with crunchy walnuts.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  Slice: S$6.50
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/caramelbanana.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h4 class="text-xl font-bold text-amber-900">Caramel Banana Cake</h4>
                <p class="text-gray-600 mt-2">
                  Banana sponge topped with caramel drizzle and toasted walnuts.
                </p>
                <p class="font-bold text-yellow-700 mt-4">
                  Slice: S$8.90<br>
                  Whole Cake: S$39.90
                </p>
              </div>
            </div>

          </div>
        </section>

        <!-- Pastries -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            🧁 Freshly Baked Pastries
          </h2>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm">
            <img src="images/cupcake.jpg" class="h-56 w-full object-cover">
            <div class="p-5">
              <h3 class="text-xl font-bold text-amber-900">
                Banana Cupcake
              </h3>

              <p class="text-gray-600 mt-2">
                Freshly baked banana cupcake with crunchy walnut pieces.
              </p>

              <p class="font-bold text-yellow-700 mt-4">
                S$3.80
              </p>
            </div>
          </div>
        </section>

        <!-- Desserts -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            🍨 Sweet Desserts
          </h2>

          <div class="grid md:grid-cols-2 gap-6">

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/waffles.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Banana Waffles
                </h3>

                <p class="text-gray-600 mt-2">
                  Golden waffles served with fresh banana slices,
                  vanilla ice cream and chocolate sauce.
                </p>

                <p class="font-bold text-yellow-700 mt-4">
                  S$9.90
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/pudding.jpg" class="h-56 w-full object-cover">
              <div class="p-5">
                <h3 class="text-xl font-bold text-amber-900">
                  Banana Pudding
                </h3>

                <p class="text-gray-600 mt-2">
                  Homemade banana pudding layered with biscuits and whipped cream.
                </p>

                <p class="font-bold text-yellow-700 mt-4">
                  S$5.90
                </p>
              </div>
            </div>

          </div>
        </section>

        <!-- Drinks -->
        <section>
          <h2 class="text-4xl font-bold text-amber-900 mb-4">
            🥤 Drinks Menu
          </h2>

          <p class="text-gray-700 mb-8 leading-8">
            Complete your dessert experience with our freshly prepared beverages.
            Every drink is handcrafted to complement our signature desserts.
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-amber-900">
                Classic Banana Smoothie
              </h3>
              <p class="mt-2 text-gray-600">
                Fresh bananas blended with milk and honey.
              </p>
              <p class="font-bold text-yellow-700 mt-4">S$6.50</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-amber-900">
                Strawberry Banana Smoothie
              </h3>
              <p class="mt-2 text-gray-600">
                Strawberries blended with bananas and topped with whipped cream.
              </p>
              <p class="font-bold text-yellow-700 mt-4">S$7.20</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-amber-900">
                Tropical Banana Smoothie
              </h3>
              <p class="mt-2 text-gray-600">
                Banana, mango and pineapple blended together.
              </p>
              <p class="font-bold text-yellow-700 mt-4">S$7.50</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-amber-900">
                Banana Milkshake
              </h3>
              <p class="mt-2 text-gray-600">
                Vanilla ice cream blended with bananas and whipped cream.
              </p>
              <p class="font-bold text-yellow-700 mt-4">S$7.80</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-amber-900">
                Chocolate Banana Milkshake
              </h3>
              <p class="mt-2 text-gray-600">
                Chocolate milkshake mixed with fresh bananas.
              </p>
              <p class="font-bold text-yellow-700 mt-4">S$8.20</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-amber-900">
                Coffee & Tea
              </h3>

              <p class="mt-2 text-gray-600">
                Signature Latte — S$5.80
              </p>

              <p class="mt-1 text-gray-600">
                Cappuccino — S$5.80
              </p>
            </div>

          </div>
        </section>

        <!-- Pairings -->
        <section class="bg-yellow-100 rounded-2xl p-10 text-center">

          <h2 class="text-3xl font-bold text-amber-900 mb-4">
            ☕ Perfect Pairings
          </h2>

          <p class="text-gray-700 max-w-3xl mx-auto leading-8">
            Our handcrafted drinks are specially designed to complement Banana
            Bliss desserts. Whether you prefer a refreshing smoothie with our
            signature cakes or a rich coffee alongside a warm pastry, every
            pairing is carefully selected to create the perfect café experience.
          </p>

        </section>

      </div>

    </main>
  `;
}

export function initMenuPage() {
  initLibraryEvents();
}
