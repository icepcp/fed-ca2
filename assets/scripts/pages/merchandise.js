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