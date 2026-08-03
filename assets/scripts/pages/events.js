export default function EventsPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 leading-tight mt-4">
          Create Sweet Memories at Banana Bliss
        </h1>
      </header>

      <!-- Intro -->
      <section>
        <p class="text-base md:text-lg text-amber-800 leading-8 max-w-3xl mt-4">
          At Banana Bliss, we believe that great food brings people together. Throughout the year, we
          organise fun workshops, seasonal celebrations and community events where customers can learn new
          skills, meet fellow dessert lovers and enjoy memorable experiences in our café.
        </p>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mt-4">
          Whether you're decorating your first banana cake or celebrating a festive occasion with family and
          friends, there's always something exciting happening at Banana Bliss.
        </p>
      </section>

      <!-- Featured Event Banner -->
      <section class="rounded-2xl p-8 md:p-10" style="background-color:#A9752E;">
        <h2 class="text-2xl md:text-4xl font-bold mb-2" style="color:#FFFFFF;">Banana Cake Decorating Workshop</h2>
        <p class="text-lg font-semibold mb-4" style="color:#FFEFD1;">Learn • Create • Take Home Your Masterpiece</p>
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base" style="color:#FFEFD1;">
          <span>📅 16 August 2026</span>
          <span>🕙 10:00 AM – 12:00 PM</span>
          <span>Limited to 20 participants</span>
        </div>
        <p class="text-sm font-semibold mt-4" style="color:#FFFFFF;">Register in-store today!</p>
      </section>

      <!-- Upcoming Events -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Workshops</h2>

        <div class="grid md:grid-cols-2 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 class="text-xl font-bold text-amber-900 mb-2">Banana Cake Decorating Workshop</h3>
            <p class="text-sm font-semibold text-amber-700 mb-1">Saturday, 16 August 2026</p>
            <p class="text-sm text-gray-500 mb-1">10:00 AM – 12:00 PM • Orchard Outlet</p>
            <p class="text-lg font-bold text-orange-600 mb-4">S$35 per person</p>
            <p class="text-sm font-semibold text-amber-900 mb-2">Workshop Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Learn basic cake decorating techniques</li>
              <li>• Decorate your own mini banana cake</li>
              <li>• Professional guidance from our pastry chefs</li>
              <li>• Take your finished cake home</li>
              <li>• Complimentary drink included</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>
            </div>
            <h3 class="text-xl font-bold text-amber-900 mb-2">Banana Baking for Beginners</h3>
            <p class="text-sm font-semibold text-amber-700 mb-1">Sunday, 31 August 2026</p>
            <p class="text-sm text-gray-500 mb-1">2:00 PM – 4:30 PM • Orchard Outlet</p>
            <p class="text-lg font-bold text-orange-600 mb-4">S$45 per person</p>
            <p class="text-sm font-semibold text-amber-900 mb-2">Workshop Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Learn how to bake moist banana muffins</li>
              <li>• Tips for choosing the best bananas</li>
              <li>• Baking techniques and decorating ideas</li>
              <li>• Recipe card to take home</li>
              <li>• Certificate of participation</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- Seasonal Café Events -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Seasonal Café Events</h2>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
              1 Jun – 31 Jul
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-2">Summer Tropical Dessert Festival</h3>
            <p class="text-gray-700 leading-7">
              Enjoy our limited-time tropical menu featuring mango banana smoothies, passionfruit banana
              parfaits and exclusive summer desserts.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
              24 – 31 Oct
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-2">Halloween Dessert Week</h3>
            <p class="text-gray-700 leading-7">
              Celebrate Halloween with spooky banana-themed desserts, costume discounts and fun café
              decorations.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <span class="inline-block text-xs font-semibold bg-amber-400 text-amber-950 rounded-full px-3 py-1 mb-3">
              1 – 31 Dec
            </span>
            <h3 class="text-xl font-bold text-amber-900 mb-2">Christmas Banana Wonderland</h3>
            <p class="text-gray-700 leading-7">
              Enjoy festive banana desserts, holiday gift boxes and special Christmas drinks while
              experiencing our beautifully decorated café.
            </p>
          </div>

        </div>
      </section>

      <!-- Community Activities -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Community Activities</h2>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <h3 class="text-lg font-bold text-amber-900 mb-2">Coffee & Cake Meet-Up</h3>
            <p class="text-gray-700 leading-7">
              Join fellow café lovers every first Saturday of the month for a relaxing afternoon of coffee,
              desserts and conversations in our cosy café.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <h3 class="text-lg font-bold text-amber-900 mb-1">Kids' Mini Cake Decorating Day</h3>
            <p class="text-sm font-semibold text-amber-700 mb-2">Recommended Age: 5–12 years</p>
            <p class="text-gray-700 leading-7">
              Children can decorate their own mini banana cupcakes with colourful toppings while learning
              simple decorating techniques in a fun and safe environment.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-amber-900 mb-2">Charity Bake Sale</h3>
            <p class="text-gray-700 leading-7">
              Several times a year, Banana Bliss partners with local charities to organise bake sales. A
              portion of the proceeds is donated to support community programmes and meaningful causes.
            </p>
          </div>

        </div>
      </section>

      <!-- Why Join Our Events -->
      <section class="rounded-2xl p-8 md:p-12" style="background-color:#59571B;">
        <h2 class="text-3xl md:text-5xl font-bold mb-6" style="color:#FDF6DC;">Why Join Our Events?</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <p class="leading-7 font-medium" style="color:#E7E4CC;">• Learn new baking and decorating skills</p>
          <p class="leading-7 font-medium" style="color:#E7E4CC;">• Meet our experienced pastry chefs</p>
          <p class="leading-7 font-medium" style="color:#E7E4CC;">• Take home your handmade creations</p>
          <p class="leading-7 font-medium" style="color:#E7E4CC;">• Enjoy quality time with family and friends</p>
          <p class="leading-7 font-medium" style="color:#E7E4CC;">• Be part of the Banana Bliss community</p>
          <p class="leading-7 font-medium" style="color:#E7E4CC;">• Capture fun memories in our cosy café</p>
        </div>
      </section>

      <!-- Registration Information -->
      <section class="bg-white rounded-2xl shadow-md p-8 md:p-12">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Registration Information</h2>
        <ul class="text-gray-700 leading-8 space-y-1 max-w-2xl">
          <li>• Registration can be completed at any Banana Bliss outlet.</li>
          <li>• Workshop spaces are limited and available on a first-come, first-served basis.</li>
          <li>• Payment is required to confirm your booking.</li>
          <li>• Members enjoy 10% off selected workshops and receive priority registration for seasonal events.</li>
        </ul>
      </section>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">
        <a href="#/locations" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-white text-amber-900 border-2 border-amber-200 hover:-translate-y-0.5 transition">
          View Locations
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}