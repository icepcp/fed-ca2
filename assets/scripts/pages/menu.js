import Library, { initLibraryEvents } from "../lib/libraryEngine.js";
import Menu from "../lib/menu.js";

export default function MenuPage() {
  const params = new URLSearchParams(
    window.location.hash.split("?")[1]
  );

  const category = params.get("category");

  const menuData = Menu(category);
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

      <h2 class="text-3xl font-bold text-amber-900">
        ☕ Perfect Pairings
      </h2>
      <p class="text-gray-700 leading-8">
        Our handcrafted drinks are specially designed to complement Banana
        Bliss desserts. Whether you prefer a refreshing smoothie with our
        signature cakes or a rich coffee alongside a warm pastry, every
        pairing is carefully selected to create the perfect café experience.
      </p>

    </main>
  `;
}

export function initMenuPage() {
  initLibraryEvents();
}
