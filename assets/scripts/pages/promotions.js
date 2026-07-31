export default function PromotionsPage() {
  return `
    <main class="bg-amber-50 min-h-screen">

      <!-- Hero Section -->
      <section class="bg-yellow-100 py-16 text-center">
        <h1 class="text-5xl font-bold text-amber-900 mb-4">
          Current Promotions
        </h1>

        <p class="text-lg text-amber-800 max-w-3xl mx-auto">
          Sweet Deals, Bigger Smiles! Enjoy exclusive discounts, bundle offers
          and seasonal specials at Banana Bliss.
        </p>
      </section>

      <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <!-- Introduction -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-6">
            🍌 Sweet Deals, Bigger Smiles
          </h2>

          <div class="bg-white rounded-xl shadow-md p-8">
            <p class="text-gray-700 leading-8">
              Treat yourself to delicious savings with our latest promotions!
              Whether you're a student looking for an affordable café break,
              sharing desserts with friends or enjoying exclusive member rewards,
              there's always a reason to visit Banana Bliss.
            </p>
          </div>
        </section>

        <!-- Student Specials -->
        <section>

          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🎓 Student Specials
          </h2>

          <div class="grid lg:grid-cols-2 gap-8">

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/studentcombo.jpg" class="h-64 w-full object-cover">

              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">
                  Student Cake Combo
                </h3>

                <p class="text-yellow-700 font-semibold mt-2">
                  Monday – Friday | 11:00 AM – 5:00 PM
                </p>

                <ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>1 Signature Banana Cake Slice</li>
                  <li>1 Regular Drink</li>
                </ul>

                <p class="text-3xl font-bold text-yellow-600 mt-5">
                  S$11.90
                </p>

                <p class="text-green-700 font-semibold">
                  Save S$3.50
                </p>

                <p class="text-sm text-gray-500 mt-3">
                  Valid with student ID.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="images/studentsmoothie.jpg" class="h-64 w-full object-cover">

              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">
                  Student Smoothie Deal
                </h3>

                <p class="text-gray-700 mt-4">
                  Show your student pass and enjoy
                  <strong>15% OFF</strong>
                  all Banana Smoothies every weekday.
                </p>
              </div>
            </div>

          </div>

        </section>

        <!-- Bundle Offers -->
        <section>

          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🥤 Bundle Offers
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Banana Bliss Dessert Set
              </h3>

              <p class="mt-4 text-gray-600">
                🍰 Original Banana Cake<br>
                🥤 Banana Smoothie
              </p>

              <p class="text-3xl font-bold text-yellow-600 mt-5">
                S$13.90
              </p>

              <p class="text-green-700 font-semibold">
                Save S$2.00
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Coffee & Cake Combo
              </h3>

              <p class="mt-4 text-gray-600">
                Signature Cake Slice<br>
                + Coffee or Tea
              </p>

              <p class="text-3xl font-bold text-yellow-600 mt-5">
                S$10.90
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Family Sharing Bundle
              </h3>

              <p class="mt-4 text-gray-600">
                Whole Banana Cake<br>
                4 Drinks<br>
                2 Banana Muffins
              </p>

              <p class="text-3xl font-bold text-yellow-600 mt-5">
                S$58.90
              </p>
            </div>

          </div>

        </section>

        <!-- Year Round Promotions -->
        <section>

          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🎉 Year-Round Promotions
          </h2>

          <div class="grid md:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="font-bold text-xl text-amber-900">
                ☕ Free Coffee Refill
              </h3>

              <p class="text-gray-600 mt-4">
                Purchase any breakfast set before 11 AM and enjoy one
                complimentary coffee refill.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="font-bold text-xl text-amber-900">
                🎂 Birthday Treat
              </h3>

              <p class="text-gray-600 mt-4">
                Banana Bliss members receive a FREE slice of Signature Banana
                Cake during their birthday month.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="font-bold text-xl text-amber-900">
                🛍️ Merchandise Discount
              </h3>

              <p class="text-gray-600 mt-4">
                Spend S$40 or more and enjoy
                <strong>10% OFF</strong>
                all Banana Bliss merchandise.
              </p>
            </div>

          </div>

        </section>

        <!-- Seasonal Specials -->
        <section>

          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🌞 Seasonal Specials
          </h2>

          <div class="grid lg:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Summer Banana Mango Smoothie
              </h3>

              <p class="mt-4 text-gray-600">
                Limited-time tropical smoothie made with fresh bananas and juicy mangoes.
              </p>

              <p class="text-2xl font-bold text-yellow-600 mt-5">
                S$7.90
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Banana Biscoff Cake
              </h3>

              <p class="mt-4 text-gray-600">
                Freshly baked banana cake layered with creamy Biscoff spread and topped with crunchy Lotus Biscoff biscuit crumbs.
              </p>

              <p class="text-2xl font-bold text-yellow-600 mt-5">
                S$8.90
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 class="text-xl font-bold text-amber-900">
                Festive Banana Gift Box
              </h3>

              <p class="mt-4 text-gray-600">
                Mini Banana Cake<br>
                Signature Banana Jam<br>
                House Blend Coffee Beans
              </p>

              <p class="text-2xl font-bold text-yellow-600 mt-5">
                S$39.90
              </p>
            </div>

          </div>

        </section>

        <!-- Member Rewards -->
        <section class="bg-yellow-100 rounded-2xl p-10">

          <h2 class="text-3xl font-bold text-amber-900 text-center mb-8">
            💳 Banana Bliss Rewards
          </h2>

          <div class="grid lg:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl shadow p-6 text-center">
              <h3 class="font-bold text-xl text-amber-900">
                🍌 Banana Member
              </h3>

              <p class="mt-4">
                5% OFF selected menu items
              </p>
            </div>

            <div class="bg-white rounded-xl shadow p-6 text-center">
              <h3 class="font-bold text-xl text-amber-900">
                🥇 Gold Banana
              </h3>

              <p class="mt-4">
                10% OFF selected menu items
              </p>

              <p>
                Double reward points
              </p>
            </div>

            <div class="bg-white rounded-xl shadow p-6 text-center">
              <h3 class="font-bold text-xl text-amber-900">
                👑 Banana Bliss VIP
              </h3>

              <p class="mt-4">
                15% OFF selected menu items
              </p>

              <p>
                Early access & tasting events
              </p>
            </div>

          </div>

        </section>

        <!-- Promotion Banners -->
        <section>

          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            📢 Featured Promotions
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="bg-[#FFF6BA] text-[#AB8424] rounded-xl p-6 text-center">
              <h3 class="text-2xl font-bold">
                🎓 Student Special
              </h3>

              <p class="mt-3">
                15% OFF Selected Banana Smoothies
              </p>

              <p class="font-semibold mt-2">
                Weekdays Only
              </p>
            </div>

            <div class="bg-[#FFF6BA] text-[#AB8424] rounded-xl p-6 text-center">
              <h3 class="text-2xl font-bold">
                ⭐ Member Exclusive
              </h3>

              <p class="mt-3">
                Double Reward Points
              </p>

              <p class="font-semibold mt-2">
                This Weekend
              </p>
            </div>

            <div class="bg-[#FFF6BA] text-[#AB8424] rounded-xl p-6 text-center">
              <h3 class="text-2xl font-bold">
                ☕ Bundle & Save
              </h3>

              <p class="mt-3">
                Coffee + Signature Banana Cake
              </p>

              <p class="font-semibold mt-2">
                Only S$10.90
              </p>
            </div>

            <div class="bg-[#FFF6BA] text-[#AB8424] rounded-xl p-6 text-center">
              <h3 class="text-2xl font-bold">
                🎂 Limited-Time Offer
              </h3>

              <p class="mt-3">
                Buy 2 Cake Slices
              </p>

              <p class="font-semibold">
                Get the 3rd at 50% OFF
              </p>
            </div>

            <div class="bg-[#FFF6BA] text-[#AB8424] rounded-xl p-6 text-center">
              <h3 class="text-2xl font-bold">
                🛍️ Merchandise Deal
              </h3>

              <p class="mt-3">
                Spend S$40
              </p>

              <p class="font-semibold">
                Enjoy 10% OFF Merchandise
              </p>
            </div>

          </div>

        </section>

      </div>

    </main>
  `;
}