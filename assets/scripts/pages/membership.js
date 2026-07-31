export default function MembershipPage() {
  return `
    <main class="bg-amber-50 min-h-screen">

      <!-- Hero Section -->
      <section class="bg-yellow-100 py-16 text-center">
        <h1 class="text-5xl font-bold text-amber-900 mb-4">
          Banana Bliss Rewards
        </h1>

        <p class="text-lg text-amber-800 max-w-3xl mx-auto">
          Join the Banana Bliss family and enjoy exclusive discounts,
          birthday treats and exciting rewards every time you visit.
        </p>
      </section>

      <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <!-- Introduction -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            🍌 Join the Banana Bliss Family
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8">
            <p class="text-gray-700 leading-8">
              Become a Banana Bliss member and enjoy exclusive rewards every
              time you visit. Our membership programme is designed to thank
              loyal customers with special discounts, birthday treats and
              exciting member-only benefits throughout the year.
            </p>

            <br>

            <p class="text-gray-700 leading-8">
              Whether you're stopping by for your favourite banana cake or
              trying our latest seasonal drinks, being a member means every
              visit is even more rewarding.
            </p>
          </div>
        </section>

        <!-- Benefits -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🎁 Member Benefits
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="text-xl font-bold text-amber-900">
                Exclusive Discounts
              </h3>
              <p class="text-gray-600 mt-3">
                Enjoy discounts on selected cakes, drinks and merchandise.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <div class="text-4xl mb-4">🎂</div>
              <h3 class="text-xl font-bold text-amber-900">
                Birthday Reward
              </h3>
              <p class="text-gray-600 mt-3">
                Receive a FREE slice of Signature Banana Cake or one
                complimentary handcrafted drink.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <div class="text-4xl mb-4">⭐</div>
              <h3 class="text-xl font-bold text-amber-900">
                Earn Rewards
              </h3>
              <p class="text-gray-600 mt-3">
                Spend more to unlock even greater membership benefits.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <div class="text-4xl mb-4">🎉</div>
              <h3 class="text-xl font-bold text-amber-900">
                Member Promotions
              </h3>
              <p class="text-gray-600 mt-3">
                Enjoy early access to seasonal offers and exclusive events.
              </p>
            </div>

          </div>
        </section>

        <!-- Membership Tiers -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            👑 Membership Tiers
          </h2>

          <div class="grid lg:grid-cols-3 gap-8">

            <!-- Banana Member -->
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-400">
              <h3 class="text-2xl font-bold text-amber-900 mb-3">
                🍌 Banana Member
              </h3>

              <p class="font-semibold text-yellow-700 mb-4">
                Spend: Up to S$199/year
              </p>

              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>5% off selected menu items</li>
                <li>Birthday reward</li>
                <li>Member-only promotions</li>
              </ul>
            </div>

            <!-- Gold -->
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-500">
              <h3 class="text-2xl font-bold text-amber-900 mb-3">
                🥇 Gold Banana Member
              </h3>

              <p class="font-semibold text-yellow-700 mb-4">
                Spend: S$200 – S$499/year
              </p>

              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>10% off selected menu items</li>
                <li>Birthday reward</li>
                <li>Priority access to seasonal products</li>
                <li>Double reward points</li>
              </ul>
            </div>

            <!-- VIP -->
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-700">
              <h3 class="text-2xl font-bold text-amber-900 mb-3">
                👑 Banana Bliss VIP
              </h3>

              <p class="font-semibold text-yellow-700 mb-4">
                Spend: S$500+/year
              </p>

              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>15% off selected menu items</li>
                <li>Premium birthday surprise</li>
                <li>Exclusive tasting workshops</li>
                <li>Early access to new launches</li>
                <li>Special anniversary rewards</li>
              </ul>
            </div>

          </div>
        </section>

        <!-- Join -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            📝 How to Join
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8">
            <p class="text-gray-700 leading-8">
              Joining Banana Bliss Rewards is quick and easy.
            </p>

            <br>

            <p class="text-gray-700 leading-8">
              Simply visit any Banana Bliss Café outlet and speak to one of our
              friendly staff members. They will help you complete a short
              registration form and activate your membership on the spot.
            </p>

            <div class="mt-6 bg-yellow-100 rounded-lg p-4">
              <p class="font-semibold text-amber-900">
                📍 Membership registration is available in-store only and cannot
                be completed online.
              </p>
            </div>
          </div>
        </section>

        <!-- Terms -->
        <section class="bg-yellow-100 rounded-2xl p-10">

          <h2 class="text-3xl font-bold text-amber-900 mb-6 text-center">
            📋 Membership Terms
          </h2>

          <div class="max-w-3xl mx-auto">
            <ul class="list-disc list-inside text-gray-700 space-y-3">
              <li>Membership is free to join.</li>
              <li>Rewards and discounts are available after registration.</li>
              <li>Birthday rewards are valid during your birthday month.</li>
              <li>Membership tiers are reviewed based on annual spending.</li>
              <li>Members must present their membership account when making purchases.</li>
            </ul>
          </div>

        </section>

      </div>

    </main>
  `;
}