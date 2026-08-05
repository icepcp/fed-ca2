export default function FaqPage() {
  return `
<header class="relative h-120 rounded-2xl overflow-hidden flex items-center justify-center">

  <!-- Background Video -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="assets/backgroundfaq.mp4" type="video/mp4">
  </video>

  <!-- Dark Overlay -->
  <div class="absolute inset-0 bg-black/10 z-10"></div>

 

<div class="absolute inset-0 flex items-end justify-start p-8">
  <div>
    <h1 
      class="text-5xl md:text-7xl font-extrabold leading-tight"
      style="color:#FFFDD0;"
    >
      Frequently Asked Questions
    </h1>

    <p 
  class="max-w-3xl mt-6"
  style="
    color:white;
    font-size:20px;
    line-height:2;
    font-weight:500;
  "
>
  Have a question about Banana Bliss? Find answers to some of our most commonly asked questions
  below. If you need further assistance, our friendly staff will be happy to help at any of our
  café outlets.
</p>
  </div>
</div>

</header>

      

      <!-- Ingredients & Allergens -->
      <section>
        <h2 class="text-2xl md:text-3xl font-bold text-amber-900 mt-4 mb-6">Ingredients & Allergens</h2>

        <div class="bg-white rounded-2xl shadow-md divide-y divide-amber-100 overflow-hidden">

          <div>
            <button
              type="button"
              onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
              class="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-7"
            >
              <span class="font-bold text-amber-900">What ingredients do you use in your banana desserts?</span>
              <svg class="faq-icon shrink-0 transition-transform duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="hidden px-6 md:px-7 pb-5 text-gray-700 leading-7">
              We use fresh ripe bananas, premium dairy products, fresh eggs, quality flour and carefully
              selected ingredients to ensure every dessert is fresh and delicious.
            </div>
          </div>

          <div>
            <button
              type="button"
              onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
              class="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-7"
            >
              <span class="font-bold text-amber-900">Do your products contain common allergens?</span>
              <svg class="faq-icon shrink-0 transition-transform duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="hidden px-6 md:px-7 pb-5 text-gray-700 leading-7">
              Yes. Some of our products may contain:
              <ul class="mt-2 space-y-1">
                <li>• Gluten (wheat)</li>
                <li>• Eggs</li>
                <li>• Milk</li>
                <li>• Soy</li>
                <li>• Tree nuts (e.g. walnuts)</li>
              </ul>
              <p class="mt-2">Please inform our staff if you have any food allergies before placing your order.</p>
            </div>
          </div>

          <div>
            <button
              type="button"
              onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
              class="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-7"
            >
              <span class="font-bold text-amber-900">Do you offer vegetarian options?</span>
              <svg class="faq-icon shrink-0 transition-transform duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="hidden px-6 md:px-7 pb-5 text-gray-700 leading-7">
              Yes! Many of our cakes, pastries and beverages are suitable for vegetarians. Feel free to ask
              our staff for recommendations.
            </div>
          </div>

        </div>
      </section>

      <!-- Cake Orders & Reservations -->
      <section>
        <h2 class="text-2xl md:text-3xl font-bold text-amber-900 mt-4 mb-6">Cake Orders & Reservations</h2>

        <div class="bg-white rounded-2xl shadow-md divide-y divide-amber-100 overflow-hidden">

          <div>
            <button
              type="button"
              onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
              class="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-7"
            >
              <span class="font-bold text-amber-900">Can I customise a whole banana cake?</span>
              <svg class="faq-icon shrink-0 transition-transform duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="hidden px-6 md:px-7 pb-5 text-gray-700 leading-7">
              Yes! We offer custom whole cakes where you can choose your preferred size, flavour and a
              personalised message. Please place your order at least 3 days in advance.
            </div>
          </div>

          <div>
            <button
              type="button"
              onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
              class="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-7"
            >
              <span class="font-bold text-amber-900">Can I reserve a table?</span>
              <svg class="faq-icon shrink-0 transition-transform duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="hidden px-6 md:px-7 pb-5 text-gray-700 leading-7">
              Yes. Table reservations are available for groups of 4 or more. We recommend booking early,
              especially on weekends and public holidays.
            </div>
          </div>

          <div>
            <button
              type="button"
              onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
              class="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-7"
            >
              <span class="font-bold text-amber-900">Do you provide takeaway and gift packaging?</span>
              <svg class="faq-icon shrink-0 transition-transform duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="hidden px-6 md:px-7 pb-5 text-gray-700 leading-7">
              Yes! All cakes and pastries can be packed for takeaway, and we also offer gift boxes for
              selected products.
            </div>
          </div>

        </div>
      </section>

      <!-- Promotions & Membership -->
<section class="mt-10">

  <!-- Section Title -->
  <div class="mb-6">
    <h2 class="text-3xl md:text-4xl font-extrabold text-amber-900">
      Promotions & Membership
    </h2>
    <p class="text-amber-700 mt-2 text-lg">
      Enjoy exclusive deals, rewards, and special offers as a Banana Bliss member.
    </p>
  </div>


  <!-- FAQ Card -->
  <div class="bg-white rounded-3xl shadow-lg overflow-hidden border border-amber-100">

    <div class="hover:bg-amber-50 transition">
      <button
        type="button"
        onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
        class="w-full flex items-center justify-between gap-4 text-left px-7 py-6"
      >
        <span class="font-bold text-lg text-amber-900">
          Can I use more than one promotion at the same time?
        </span>

        <svg class="faq-icon shrink-0 transition-transform duration-200"
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="#774D0C"
          stroke-width="2.5">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      <div class="hidden px-7 pb-6 text-gray-700 leading-7">
        Unless otherwise stated, promotions cannot be combined. The best available promotion will be applied to your purchase.
      </div>
    </div>


    <div class="border-t border-amber-100 hover:bg-amber-50 transition">
      <button
        type="button"
        onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
        class="w-full flex items-center justify-between gap-4 text-left px-7 py-6"
      >
        <span class="font-bold text-lg text-amber-900">
          How do I become a Banana Bliss member?
        </span>

        <svg class="faq-icon shrink-0 transition-transform duration-200"
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="#774D0C"
          stroke-width="2.5">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      <div class="hidden px-7 pb-6 text-gray-700 leading-7">
        Membership registration is available in person at any Banana Bliss outlet. Simply speak to one of our staff members to sign up and start enjoying exclusive rewards.
      </div>
    </div>


    <div class="border-t border-amber-100 hover:bg-amber-50 transition">
      <button
        type="button"
        onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.faq-icon').classList.toggle('rotate-180')"
        class="w-full flex items-center justify-between gap-4 text-left px-7 py-6"
      >
        <span class="font-bold text-lg text-amber-900">
          Do promotions change regularly?
        </span>

        <svg class="faq-icon shrink-0 transition-transform duration-200"
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="#774D0C"
          stroke-width="2.5">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      <div class="hidden px-7 pb-6 text-gray-700 leading-7">
        Yes! We introduce new seasonal offers, student deals and member-exclusive promotions throughout the year. Follow our social media pages or visit our cafés to stay updated.
      </div>
    </div>

  </div>

</section>

     <!-- Still Have Questions -->
      <section class="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-4">We're Happy to Help</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-2xl mx-auto mb-8">
          If you can't find the answer you're looking for, feel free to visit any Banana Bliss outlet or
          speak with one of our friendly team members. We'll be happy to assist you!
        </p>

        <div class="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
          <div class="flex items-center gap-2 text-amber-900 font-semibold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Visit us in-store
          </div>
          <div class="flex items-center gap-2 text-amber-900 font-semibold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +65 6123 4567
          </div>
          <div class="flex items-center gap-2 text-amber-900 font-semibold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#774D0C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
            hello@bananabliss.sg
          </div>
        </div>

        <div class="rounded-2xl border-2 border-amber-200 bg-yellow-100 p-6 md:p-7 max-w-xl mx-auto mb-8">
          <p class="text-amber-900 font-semibold mb-3">Prefer to write to us instead?</p>
          <a href="#/contactus" class="inline-flex items-center justify-center gap-2 rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Fill Out Our Contact Form
          </a>
        </div>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">
        <a href="#/menu" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
          Explore Menu
        </a>
        <a href="#/locations" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-[#F0DC92] text-amber-900 border-2 border-amber-200 hover:-translate-y-0.5 transition">
          View Locations
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}