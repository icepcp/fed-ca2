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

 <div class="max-w-7xl mx-auto px-6 py-10 bg-amber-50">

  <h2 class="text-2xl font-extrabold text-stone-800 mb-6">
    Why Choose Our Merchandise
  </h2>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

    <!-- Premium Quality -->
    <div class="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
      <div class="w-9 h-9 shrink-0 rounded-full bg-amber-400 flex items-center justify-center">
        <svg class="w-4 h-4 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.176 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69z"/>
        </svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-amber-900 mb-1">Premium Quality</h3>
        <p class="text-sm text-stone-500 leading-snug">
          Carefully chosen materials built to last, not just look good on day one.
        </p>
      </div>
    </div>

    <!-- Exclusive Designs -->
    <div class="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
      <div class="w-9 h-9 shrink-0 rounded-full bg-amber-400 flex items-center justify-center">
        <svg class="w-4 h-4 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="9"/>
          <circle cx="9" cy="10" r="1" fill="currentColor"/>
          <circle cx="13.5" cy="8" r="1" fill="currentColor"/>
          <circle cx="16" cy="12.5" r="1" fill="currentColor"/>
          <path stroke-linecap="round" d="M12 21a3 3 0 01-3-3c0-1 1-1.5 1-2.5A2.5 2.5 0 007.5 12.5"/>
        </svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-amber-900 mb-1">Exclusive Designs</h3>
        <p class="text-sm text-stone-500 leading-snug">
          Banana Bliss artwork created in-house — you won't find these prints anywhere else.
        </p>
      </div>
    </div>

    <!-- Eco-Friendly -->
    <div class="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
      <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center" style="background-color:#5f6b2e">
        <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 20A7 7 0 019.8 6.1C15.5 5 20 8.5 20 14a8.38 8.38 0 01-.3 2.5 7 7 0 01-8.7 3.5z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6"/>
        </svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-amber-900 mb-1">Eco-Friendly & Reusable</h3>
        <p class="text-sm text-stone-500 leading-snug">
          Designed to be used again and again, sourced responsibly at every step.
        </p>
      </div>
    </div>

    <!-- Perfect Gifts -->
    <div class="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
      <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center" style="background-color:#5f6b2e">
        <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <rect x="3" y="8" width="18" height="4" rx="1"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13M5 12v7a1 1 0 001 1h12a1 1 0 001-1v-7"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3-1-3-2.5S10 3 12 4c2-1 4 0 3 1.5S13.5 8 12 8zM12 8c1.5 0 3-1 3-2.5S14 3 12 4"/>
        </svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-amber-900 mb-1">Perfect Gifts</h3>
        <p class="text-sm text-stone-500 leading-snug">
          Thoughtfully packaged pieces that feel as good to give as to receive.
        </p>
      </div>
    </div>

    <!-- Bring the Café Home -->
    <div class="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
      <div class="w-9 h-9 shrink-0 rounded-full bg-amber-400 flex items-center justify-center">
        <svg class="w-4 h-4 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 11l9-7 9 7"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"/>
        </svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-amber-900 mb-1">Bring the Café Home</h3>
        <p class="text-sm text-stone-500 leading-snug">
          A little piece of the Banana Bliss experience, wherever you're enjoying your cup.
        </p>
      </div>
    </div>

  </div>
</div>

    </main>
  `;
}

export function initMenuPage() {
  initLibraryEvents();
}