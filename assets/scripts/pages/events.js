export default function EventsPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <h1 class="text-5xl font-bold text-[#FFFFFB]">
          Our Events
        </h1>

        <p class="text-lg text-[#FFFFFB] -mt-3 text-xl/6">
          Create Sweet Memories at Banana Bliss. Join our baking workshops, seasonal celebrations,
          and community events designed for dessert lovers.
          <br><br>
          Whether you're decorating your first banana cake or celebrating a festive occasion with family and
          friends, there's always something exciting happening at Banana Bliss.
        </p>
      </header>

      <!-- Decorative Divider -->
      <div class="flex items-center gap-4 my-4">
        <div class="flex-1 border-t border-[#CBB799]"></div>
        <span class="text-[#CBB799] text-2xl">❦</span>
        <div class="flex-1 border-t border-[#CBB799]"></div>
      </div>
      <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Workshops</h2>
      <!-- Featured Event Banner -->
      <section class="relative rounded-2xl overflow-hidden h-[500px]">

        <!-- Background Video -->
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 w-full h-full object-cover"
        >
          <source src="assets/videos/backgroundevent.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/30"></div>

        <!-- Content -->
        <div class="absolute inset-0 flex items-end justify-start p-8">
        <div>

          <h2 
            class="text-2xl md:text-4xl font-bold mb-2"
            style="color:#FFFDD0;"
          >
            Banana Cake Decorating Workshop
          </h2>

          <p 
            class="text-lg font-semibold mt-4 mb-4"
            style="color:#FFFFFB;"
          >
             Learn • Create • Take Home Your Masterpiece
          </p>

          <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-[#FFFFFB]">
            <span>16 August 2026</span>
            <span>|</span>
            <span>10:00 AM – 12:00 PM</span>
            <span>|</span>
            <span>Limited to 20 participants</span>
          </div>

          <div class="mt-6">
         <p 
          class="text-lg font-semibold"
          style="color:#FFFFFB;"
          >
            Register in-store today!
        </p>
        </div>    

        </div>

      </section>

      <!-- Upcoming Events -->
      <section>
      

        <div class="grid md:grid-cols-2 gap-5 md:gap-6 ">

          <div class="bg-[#F9EFBD] rounded-2xl shadow-md p-6 md:p-7 hover:-translate-y-2 hover:shadow-xl transition duration-300"">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#D2A941]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 class="text-xl font-bold text-amber-900 mb-2">Banana Bread Baking Workshop</h3>
            <p class="text-sm font-semibold text-amber-700 mb-1">Sunday, 30 August 2026</p>
            <p class="text-sm text-gray-500 mb-1">2:00 PM – 4:30 PM • Causeway Point</p>
            <p class="text-lg font-bold text-orange-600 mb-4">S$35 per person</p>
            <p class="text-sm font-semibold text-amber-900 mb-2">Workshop Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Learn the secrets to baking soft and moist banana bread</li>
              <li>• Mix and prepare your own banana bread from scratch</li>
              <li>• Discover tips on selecting the best bananas for baking</li>
              <li>• Bake and bring home your freshly made banana bread</li>
              <li>• Complimentary coffee or tea included</li>
            </ul>
          </div>

          <div class="bg-[#F9EFBD] rounded-2xl shadow-md p-6 md:p-7 hover:-translate-y-2 hover:shadow-xl transition duration-300"">
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

      <!-- Decorative Divider -->
        <div class="flex items-center gap-4 my-8">
        <div class="flex-1 border-t border-[#CBB799]"></div>
        <span class="text-[#CBB799] text-2xl">❦</span>
        <div class="flex-1 border-t border-[#CBB799]"></div>
        </div>

   <section class="mt-0">

     <!-- Section Title -->
       <div class="mb-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-amber-900">
        Upcoming Events
       </h2>

    <p class="text-amber-700 mt-2 text-lg">
      Join our upcoming workshops and create sweet memories with Banana Bliss!
    </p>
  </div>

  <div class="grid md:grid-cols-3 gap-6 items-start">

    <!-- Card 1 -->
    <div class="rounded-2xl shadow-md overflow-hidden bg-[#FFFFFB]">
      
      <img
        src="assets/images/event/summertropical.jpeg"
        class="w-full h-56 object-cover"
      >

      <div class="p-6 md:p-7">

        <span class="inline-block text-xs font-semibold bg-[#D2A941] text-amber-950 rounded-full px-3 py-1 mb-3">
          1 – 31 Aug
        </span>

        <h3 class="text-xl font-bold text-amber-900 mb-2">
          Summer Tropical Dessert Festival
        </h3>

      <p id="summerDesc" class="text-gray-700 leading-7 mb-4 hidden">
         Enjoy our limited-time tropical menu featuring mango banana smoothies,
         passionfruit banana parfaits and exclusive summer desserts.
      </p>
    <button
       id="summerBtn"
       onclick="
       document.getElementById('summerDesc').classList.toggle('hidden');
       this.textContent = this.textContent.trim() === 'More Details' ? 'Close' : 'More Details';
      "
       class="text-[#D2A941] text-xl font-regular hover:text-[#B88A2E] transition duration-300"
     >
        More Details
    </button>

      </div>

    </div>


    <!-- Card 2 -->
    <div class="rounded-2xl shadow-md overflow-hidden bg-[#FFFFFB]">

   <img
      src="assets/images/event/halloween.jpeg"
      class="w-full h-56 object-cover"
   >

    <div class="p-6 md:p-7">

    <span class="inline-block text-xs font-semibold bg-[#D2A941] text-amber-950 rounded-full px-3 py-1 mb-3">
      24 – 31 Oct
    </span>

    <h3 class="text-xl font-bold text-amber-900 mb-2">
      Halloween Dessert Week
    </h3>

      <p id="halloweenDesc" class="text-gray-700 leading-7 mb-4 hidden">
        Celebrate Halloween with spooky banana-themed desserts, costume discounts,
        and fun café decorations. Enjoy a sweet seasonal experience!
      </p>

    <button
      id="halloweenBtn"
      onclick="
      document.getElementById('halloweenDesc').classList.toggle('hidden');
      this.textContent = this.textContent.trim() === 'More Details' ? 'Close' : 'More Details';
      "
      class="text-[#D2A941] text-xl font-normal hover:text-[#B88A2E] transition duration-300"
    >
      More Details
    </button>

    </div>

  </div>


    <!-- Card 3 -->
    <div class="rounded-2xl shadow-md overflow-hidden bg-[#FFFFFB]">

    <img
      src="assets/images/event/christmas.jpeg"
      class="w-full h-56 object-cover"
    >

    <div class="p-6 md:p-7">

    <span class="inline-block text-xs font-semibold bg-[#D2A941] text-amber-950 rounded-full px-3 py-1 mb-3">
      1 – 31 Dec
    </span>

    <h3 class="text-xl font-bold text-amber-900 mb-2">
      Christmas Banana Wonderland
    </h3>

    <p id="christmasDesc" class="text-gray-700 leading-7 mb-4 hidden">
      Enjoy festive banana desserts, holiday gift boxes and special Christmas 
      drinks while experiencing our beautifully decorated café.
    </p>

    <button
      id="christmasBtn"
      onclick="
      document.getElementById('christmasDesc').classList.toggle('hidden');
      this.textContent = this.textContent.trim() === 'More Details' ? 'Close' : 'More Details';
      "
      class="text-[#D2A941] text-xl font-normal hover:text-[#B88A2E] transition duration-300"
    >
      More Details
    </button>

      </div>

    </div>



   </section>

      <!-- Community Activities -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Community Activities</h2>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-[#F9EFBD] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#D2A941]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <h3 class="text-lg font-bold text-amber-900 mb-2">Coffee & Cake Meet-Up</h3>
            <p class="text-gray-700 leading-7">
              Join fellow café lovers every first Saturday of the month for a relaxing afternoon of coffee,
              desserts and conversations in our cosy café.
            </p>
          </div>

          <div class="bg-[#F9EFBD] rounded-2xl shadow-md p-6 md:p-7">
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

          <div class="bg-[#F9EFBD] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-[#D2A941]">
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

      <!-- Decorative Divider -->
        <div class="flex items-center gap-4 my-8">
        <div class="flex-1 border-t border-[#CBB799]"></div>
        <span class="text-[#CBB799] text-2xl">❦</span>
        <div class="flex-1 border-t border-[#CBB799]"></div>
        </div>

      <!-- Why Join Our Events -->
      <section class="rounded-2xl p-8 md:p-12" style="background-color:#59571B;">
        <h2 class="text-3xl md:text-5xl font-bold mb-6" style="color:#FFFFFB;">Why Join Our Events?</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <p class="leading-7 font-medium" style="color:#FBF7E7;">• Learn new baking and decorating skills</p>
          <p class="leading-7 font-medium" style="color:#FBF7E7;">• Meet our experienced pastry chefs</p>
          <p class="leading-7 font-medium" style="color:#FBF7E7;">• Take home your handmade creations</p>
          <p class="leading-7 font-medium" style="color:#FBF7E7;">• Enjoy quality time with family and friends</p>
          <p class="leading-7 font-medium" style="color:#FBF7E7;">• Be part of the Banana Bliss community</p>
          <p class="leading-7 font-medium" style="color:#FBF7E7;">• Capture fun memories in our cosy café</p>
        </div>
      </section>

      <!-- Registration Information -->
      <section class="bg-[#FFFFFB] rounded-2xl shadow-md p-8 md:p-12">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Registration Information</h2>
        <ul class="text-lg text-gray-600 leading-9 space-y-2 max-w-4xl">
          <li>• Registration can be completed at any Banana Bliss outlet.</li>
          <li>• Workshop spaces are limited and available on a first-come, first-served basis.</li>
          <li>• Payment is required to confirm your booking.</li>
          <li>• Members enjoy 10% off selected workshops and receive priority registration for seasonal events.</li>
        </ul>
      </section>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">
        <a href="#/locations" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-[#F0DC92] text-amber-900 border-2 border-amber-200 hover:-translate-y-0.5 transition">
          View Locations
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#EAB749]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}