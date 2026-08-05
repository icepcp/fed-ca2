export default function PromotionsPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">
      <header>
        <h1 class="text-5xl font-bold text-amber-900">
          Sweet Deals, Bigger Smiles
        </h1>
        <p class="text-lg text-amber-800 -mt-3 text-xl/6">
          Treat yourself to delicious savings with our latest promotions! Whether you're a student looking for
          an affordable café break, sharing desserts with friends, or enjoying exclusive member rewards, there's
          always a reason to visit Banana Bliss.
        </p>
      </header>
      
      <!-- Student Specials -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">For Students</h2>

        <div class="grid sm:grid-cols-2 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/studentcombo.png" alt="Student Cake Combo" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-1">Student Cake Combo</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Mon – Fri | 11:00 AM – 5:00 PM</p>
              <p class="text-gray-700 leading-7 mb-3">
                1 Signature Banana Cake Slice + 1 Regular Drink
              </p>
              <p class="text-2xl font-bold text-orange-600">
                S$11.90 <span class="text-sm font-semibold text-gray-500 line-through ml-1">S$15.40</span>
              </p>
              <p class="text-xs text-gray-500 mt-2">Valid with a student ID.</p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/studentsmoothie.png" alt="Student Smoothie Deal" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4" style="background-color:#59571B;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l4 6-10 13L2 8z"/><path d="M2 8h20M10 2l2 6-2 13M14 2l-2 6 2 13"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-1">Student Smoothie Deal</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Weekdays Only</p>
              <p class="text-gray-700 leading-7">
                Show your student pass and enjoy 15% OFF all Banana Smoothies every weekday.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Bundle Offers -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Bundle & Save</h2>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/promo.jpeg" alt="Banana Bliss Dessert Set" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-3">Banana Bliss Dessert Set</h3>
              <ul class="text-gray-700 leading-7 space-y-1 mb-4">
                <li>• Original Banana Cake</li>
                <li>• Banana Smoothie</li>
              </ul>
              <p class="text-2xl font-bold text-orange-600">S$13.90</p>
              <p class="text-xs text-gray-500 mt-1">Save S$2.00</p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/coffeecake.png" alt="Coffee & Cake Combo" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4" style="background-color:#59571B;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-3">Coffee & Cake Combo</h3>
              <p class="text-sm text-gray-500 mb-2">Choose any:</p>
              <ul class="text-gray-700 leading-7 space-y-1 mb-4">
                <li>• Signature Cake Slice</li>
                <li>• Coffee or Tea</li>
              </ul>
              <p class="text-2xl font-bold text-orange-600">S$10.90</p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/family.png" alt="Family Sharing Bundle" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-1">Family Sharing Bundle</h3>
              <p class="text-sm font-semibold text-amber-700 mb-3">Perfect for sharing!</p>
              <ul class="text-gray-700 leading-7 space-y-1 mb-4">
                <li>• Whole Banana Cake</li>
                <li>• 4 Drinks</li>
                <li>• 2 Banana Muffins</li>
              </ul>
              <p class="text-2xl font-bold text-orange-600">S$58.90</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Year-Round Promotions -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Year-Round Promotions</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/freecoffee.png" alt="Free Coffee Refill" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4" style="background-color:#59571B;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-2">Free Coffee Refill</h3>
              <p class="text-gray-700 leading-7">
                Purchase any breakfast set before 11 AM and enjoy one complimentary coffee refill.
              </p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/birthday.png" alt="Birthday Treat" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-2">Birthday Treat</h3>
              <p class="text-gray-700 leading-7">
                Celebrate your birthday month and receive a FREE slice of Signature Banana Cake with any purchase.
              </p>
              <p class="text-xs text-gray-500 mt-2">Available for Banana Bliss members only.</p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/merchandise.png" alt="Merchandise Discount" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4" style="background-color:#59571B;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <h3 class="text-xl font-bold text-amber-900 mb-2">Merchandise Discount</h3>
              <p class="text-gray-700 leading-7">
                Enjoy 10% OFF all Banana Bliss merchandise when you spend S$40 or more in a single receipt.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Seasonal Specials -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Limited-Time Only</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/seasonaldrink.png" alt="Summer Banana Mango Smoothie" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
                Limited Time
              </span>
              <h3 class="text-xl font-bold text-amber-900 mb-2">Summer Banana Mango Smoothie</h3>
              <p class="text-gray-700 leading-7 mb-3">
                A tropical smoothie made with fresh bananas and juicy mangoes.
              </p>
              <p class="text-2xl font-bold text-orange-600">S$7.90</p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/seasonalcake.png" alt="Banana Biscoff Cake" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
                Limited Time
              </span>
              <h3 class="text-xl font-bold text-amber-900 mb-2">Banana Biscoff Cake</h3>
              <p class="text-gray-700 leading-7 mb-3">
                Freshly baked banana cake layered with creamy Biscoff spread and topped with crunchy Lotus Biscoff biscuit crumbs.
              </p>
              <p class="text-2xl font-bold text-orange-600">S$8.90 <span class="text-sm font-semibold text-gray-500">per slice</span></p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img src="/assets/images/promos/giftbox.png" alt="Festive Banana Gift Box" class="w-full h-64 object-contain bg-amber-50" />
            <div class="p-6 md:p-7">
              <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
                Gift Box
              </span>
              <h3 class="text-xl font-bold text-amber-900 mb-2">Festive Banana Gift Box</h3>
              <p class="text-sm text-gray-500 mb-2">Perfect for holiday gifting. Includes:</p>
              <ul class="text-gray-700 leading-7 space-y-1 mb-3">
                <li>• Mini Banana Cake</li>
                <li>• Signature Banana Jam</li>
                <li>• House Blend Coffee Beans</li>
              </ul>
              <p class="text-2xl font-bold text-orange-600">S$39.90</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Banana Bliss Rewards -->
      <section class="bg-[#FFFFFB] rounded-2xl shadow-md p-8 md:p-12">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-2 text-center">Banana Bliss Rewards</h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Members enjoy exclusive benefits throughout the year.
        </p>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">

          <div class="rounded-2xl border-2 border-amber-200 p-6 md:p-7">
            <h3 class="text-lg font-bold text-amber-900 mb-3">Banana Member</h3>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• 5% off selected menu items</li>
            </ul>
          </div>

          <div class="rounded-2xl border-2 border-amber-400 p-6 md:p-7 relative">
            <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
              Most Popular
            </span>
            <h3 class="text-lg font-bold text-amber-900 mb-3">Gold Banana Member</h3>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• 10% off selected menu items</li>
              <li>• Double reward points during promotional periods</li>
            </ul>
          </div>

          <div class="rounded-2xl border-2 border-amber-200 p-6 md:p-7">
            <h3 class="text-lg font-bold text-amber-900 mb-3">Banana Bliss VIP</h3>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• 15% off selected menu items</li>
              <li>• Early access to seasonal promotions</li>
              <li>• Exclusive tasting events</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- Promo Banners -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">At a Glance</h2>

        <div class="grid sm:grid-cols-2 gap-5 md:gap-6">

          <div class="rounded-2xl p-6 flex items-center gap-4"
          style="background-color: #604630;">
            <div class="w-12 h-12 shrink-0 rounded-full bg-amber-100 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide" style="color:#FFFFFB;">Student Special</p>
              <p class="text-lg font-bold" style="color:#FFFFFB;">20% OFF Selected Smoothies, Weekdays Only</p>
            </div>
          </div>

          <div class="rounded-2xl p-6 flex items-center gap-4"
          style="background-color: #604630;">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 shrink-0 rounded-full flex items-center justify-center" style="background-color:#C99855;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F9EFBD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide" style="color:#FFFFFB;">Member Exclusive</p>
                <p class="text-lg font-bold" style="color:#FFFFFB;">Double Reward Points This Weekend!</p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl p-6 flex items-center gap-4"
          style="background-color: #604630;">
            <div class="w-12 h-12 shrink-0 rounded-full bg-amber-100 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide" style="color:#FFFFFB;">Bundle & Save</p>
              <p class="text-lg font-bold" style="color:#FFFFFB;">Coffee + Signature Cake Only S$10.90</p>
            </div>
          </div>

          <div class="rounded-2xl p-6 flex items-center gap-4"
            style="background-color: #604630;">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 shrink-0 rounded-full flex items-center justify-center" style="background-color:#C99855;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F9EFBD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide" style="color:#FFFFFB;">Limited-Time Offer</p>
                <p class="text-lg font-bold" style="color:#FFFFFB;">Buy 2 Slices, Get the 3rd at 50% OFF</p>
              </div>
            </div>
          </div>

         <div class="rounded-2xl p-6 flex items-center gap-4 sm:col-span-2 justify-self-center w-full sm:w-1/2"
          style="background-color: #604630;">
            <div class="w-12 h-12 shrink-0 rounded-full bg-amber-100 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide" style="color:#FFFFFB;">Merchandise Deal</p>
              <p class="text-lg font-bold" style="color:#FFFFFB;">Spend S$40 and Enjoy 10% OFF All Merchandise</p>
            </div>
          </div>

        </div>
      </section>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">

      <a href="#/menu" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
          Explore Menu
        </a>

    </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}