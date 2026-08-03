export default function LocationsPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 leading-tight mt-4">
          Find Your Nearest Banana Bliss Café
        </h1>
      </header>

      <!-- Intro -->
      <section>
        <p class="text-base md:text-lg text-amber-800 leading-8 max-w-3xl mt-4">
          No matter where you are in Singapore, there's always a Banana Bliss nearby. Visit us for freshly
          baked banana cakes, handcrafted beverages and a warm café experience. We look forward to serving you!
        </p>
      </section>

      <!-- Locations -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mb-6">Our Cafés</h2>

        <div class="grid md:grid-cols-2 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
              Flagship Store
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-4">Banana Bliss – Orchard Central</h3>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <p class="text-gray-700 leading-6">
                181 Orchard Road<br>#03-15 Orchard Central<br>Singapore 238896
              </p>
            </div>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-[#59571B]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <p class="text-gray-700 leading-7">
                Mon – Thu: 10:00 AM – 9:30 PM<br>
                Fri – Sat: 10:00 AM – 10:00 PM<br>
                Sun & PH: 10:00 AM – 9:30 PM
              </p>
            </div>

            <p class="text-sm font-semibold text-amber-900 mb-1">Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Largest Banana Bliss outlet</li>
              <li>• Signature cakes and full menu</li>
              <li>• Workshop and event venue</li>
              <li>• Merchandise available</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="inline-block text-xs font-semibold bg-yellow-100 text-amber-700 border border-amber-200 rounded-full px-3 py-1 mb-3">
              Airport
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-4">Banana Bliss – Jewel Changi Airport</h3>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <p class="text-gray-700 leading-6">
                78 Airport Boulevard<br>#02-218 Jewel Changi Airport<br>Singapore 819666
              </p>
            </div>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-[#59571B]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <p class="text-gray-700 leading-7">
                Daily: 9:00 AM – 10:00 PM
              </p>
            </div>

            <p class="text-sm font-semibold text-amber-900 mb-1">Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Perfect for travellers</li>
              <li>• Seasonal drinks and desserts</li>
              <li>• Gift boxes available</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="inline-block text-xs font-semibold bg-yellow-100 text-amber-700 border border-amber-200 rounded-full px-3 py-1 mb-3">
              Family-Friendly
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-4">Banana Bliss – VivoCity</h3>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <p class="text-gray-700 leading-6">
                1 HarbourFront Walk<br>#02-105 VivoCity<br>Singapore 098585
              </p>
            </div>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-[#59571B]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <p class="text-gray-700 leading-7">
                Mon – Sun: 10:00 AM – 10:00 PM
              </p>
            </div>

            <p class="text-sm font-semibold text-amber-900 mb-1">Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Family-friendly seating</li>
              <li>• Popular weekend brunch destination</li>
              <li>• Signature cakes and beverages</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="inline-block text-xs font-semibold bg-yellow-100 text-amber-700 border border-amber-200 rounded-full px-3 py-1 mb-3">
              Student-Friendly
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-4">Banana Bliss – Bugis Junction</h3>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <p class="text-gray-700 leading-6">
                200 Victoria Street<br>#01-48 Bugis Junction<br>Singapore 188021
              </p>
            </div>

            <div class="flex gap-3 mb-4">
              <div class="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-[#59571B]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <p class="text-gray-700 leading-7">
                Mon – Thu: 10:00 AM – 9:30 PM<br>
                Fri – Sun: 10:00 AM – 10:00 PM
              </p>
            </div>

            <p class="text-sm font-semibold text-amber-900 mb-1">Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Student-friendly promotions</li>
              <li>• Quick takeaway service</li>
              <li>• Fresh pastries baked daily</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- Why Visit -->
      <section class="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Why Visit Banana Bliss?</h2>
        <ul class="text-gray-700 leading-8 text-left max-w-md mx-auto space-y-1">
          <li>• Freshly baked banana cakes every day</li>
          <li>• Premium coffee and handcrafted drinks</li>
          <li>• Cozy and welcoming café atmosphere</li>
          <li>• Seasonal promotions and member rewards</li>
          <li>• Workshops and community events at selected outlets</li>
        </ul>
      </section>

      <!-- Visit Us Today -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mb-4">Visit Us Today!</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl">
          Whether you're meeting friends, taking a coffee break or celebrating a special occasion, Banana
          Bliss is the perfect place to relax and enjoy freshly made banana-inspired treats. We can't wait
          to welcome you to one of our cafés!
        </p>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}