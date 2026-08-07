export default function MembershipPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">
      <header>
        <h1 class="text-5xl font-bold text-amber-900">
          Join the Banana Bliss Family
        </h1>
        <p class="text-lg text-amber-800 -mt-3 text-xl/6">
          Become a Banana Bliss member and enjoy exclusive rewards every time you visit. Our membership
          programme is designed to thank loyal customers with special discounts, birthday treats and exciting
          member-only benefits throughout the year.
          <br><br>
          Whether you're stopping by for your favourite banana cake or trying our latest seasonal drinks,
          being a member means every visit is even more rewarding.
        </p>
      </header>

      <!-- Member Benefits -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Member Benefits</h2>

        <div class="grid lg:grid-cols-2 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.59 3.24L4 3a1 1 0 0 0-1 1l.24 5.59a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.82z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Exclusive Discounts</h4>
            <p class="text-gray-700 leading-7">
              Members enjoy special discounts on selected cakes, drinks and merchandise throughout the year.
            </p>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Birthday Reward</h4>
            <p class="text-gray-700 leading-7">
              Celebrate your birthday with us and receive a FREE slice of Signature Banana Cake or one
              complimentary handcrafted drink during your birthday month.
            </p>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Earn Rewards</h4>
            <p class="text-gray-700 leading-7">
              The more you visit and purchase, the more rewards you'll unlock through our membership tiers.
            </p>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#59571B]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <h4 class="text-xl font-bold text-amber-900 mb-2">Member-Only Promotions</h4>
            <p class="text-gray-700 leading-7">
              Receive early access to seasonal promotions, limited-edition menu items and exclusive member
              events.
            </p>
          </div>

        </div>
      </section>

      <!-- Membership Tiers -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-8">Membership Tiers</h2>

        <div class="grid lg:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <h3 class="text-xl font-bold text-amber-900 mb-1">Banana Member</h3>
            <p class="text-sm text-gray-500 mb-4">Spend: Up to S$199 per year</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• 5% off selected menu items</li>
              <li>• Birthday reward</li>
              <li>• Access to member-only promotions</li>
            </ul>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7 border-2 border-amber-400 relative">
            <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
              Most Popular
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-1">Gold Banana Member</h3>
            <p class="text-sm text-gray-500 mb-4">Spend: S$200 – S$499 per year</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• 10% off selected menu items</li>
              <li>• Birthday reward</li>
              <li>• Priority access to seasonal products</li>
              <li>• Double reward points on selected promotions</li>
            </ul>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <h3 class="text-xl font-bold text-amber-900 mb-1">Banana Bliss VIP</h3>
            <p class="text-sm text-gray-500 mb-4">Spend: S$500 and above per year</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• 15% off selected menu items</li>
              <li>• Premium birthday surprise</li>
              <li>• Invitations to exclusive tasting events and workshops</li>
              <li>• Early access to new menu launches</li>
              <li>• Special anniversary rewards</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- How to Join -->
      <section class="bg-[#FFFFFB] rounded-2xl shadow-md p-8 md:p-12 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-5">How to Join</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
          Joining Banana Bliss Rewards is quick and easy. Simply visit any Banana Bliss Café outlet and speak
          to one of our friendly staff members. They will help you complete a short registration form and
          activate your membership on the spot.
        </p>
        <p class="text-base md:text-lg font-semibold text-amber-900 leading-8 max-w-3xl mx-auto mt-4">
          Membership registration is available in-store only and cannot be completed online.
        </p>
      </section>

      <!-- Membership Terms -->
      <section>
        <h3 class="text-2xl md:text-3xl font-bold text-amber-900 mb-6">Membership Terms</h3>
        <div class="bg-yellow-100 rounded-2xl border-2 border-amber-200 p-6 md:p-8">
          <ul class="text-gray-700 leading-8 space-y-1">
            <li>• Membership is free to join.</li>
            <li>• Rewards and discounts are available only after successful registration.</li>
            <li>• Birthday rewards are valid during your birthday month.</li>
            <li>• Membership tiers are reviewed based on your annual spending.</li>
            <li>• Members must present their membership account when making purchases to enjoy benefits.</li>
          </ul>
        </div>
      </section>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">
        <a href="#/locations" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
          Visit a Café to Join
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}