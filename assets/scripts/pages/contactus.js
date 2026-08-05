export default function ContactUsPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 leading-tight mt-4">
          We'd Love to Hear From You!
        </h1>
      </header>

      <!-- Intro -->
      <section>
        <p class="text-base md:text-lg text-amber-800 leading-8 max-w-3xl mt-4">
          Whether you have a question about our menu, need help with a cake order, want to register for a
          workshop, or simply have feedback to share, we're here to help. Get in touch with the Banana Bliss
          team using any of the methods below.
        </p>
      </section>

      <!-- Contact Information -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Get in Touch</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-amber-900 mb-1">Phone</h3>
            <p class="text-gray-700">+65 6123 4567</p>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
            </div>
            <h3 class="text-lg font-bold text-amber-900 mb-1">Email</h3>
            <p class="text-gray-700">hello@bananabliss.sg</p>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md p-6 md:p-7">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-4 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3 class="text-lg font-bold text-amber-900 mb-2">Opening Hours</h3>
            <table class="w-full text-sm text-gray-700">
              <tbody>
                <tr class="border-t border-amber-100">
                  <td class="py-1.5 pr-2 font-semibold text-amber-900">Mon – Thu</td>
                  <td class="py-1.5 text-right">10:00 AM – 9:30 PM</td>
                </tr>
                <tr class="border-t border-amber-100">
                  <td class="py-1.5 pr-2 font-semibold text-amber-900">Fri – Sat</td>
                  <td class="py-1.5 text-right">10:00 AM – 10:00 PM</td>
                </tr>
                <tr class="border-t border-amber-100">
                  <td class="py-1.5 pr-2 font-semibold text-amber-900">Sun & PH</td>
                  <td class="py-1.5 text-right">10:00 AM – 9:30 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <!-- Follow Us -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-3">Follow Us</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mb-6">
          Stay connected with Banana Bliss for the latest promotions, seasonal menu launches and upcoming
          events!
        </p>

        <div class="flex flex-wrap gap-4">

          <a href="#" class="flex items-center gap-3 bg-[#FFFFFB] rounded-full shadow-md pl-3 pr-5 py-2.5 hover:-translate-y-0.5 transition">
            <div class="w-9 h-9 rounded-full flex items-center justify-center bg-amber-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <div>
              <p class="text-xs text-gray-500 leading-tight">Facebook</p>
              <p class="text-sm font-semibold text-amber-900 leading-tight">@BananaBlissSG</p>
            </div>
          </a>

          <a href="#" class="flex items-center gap-3 bg-[#FFFFFB] rounded-full shadow-md pl-3 pr-5 py-2.5 hover:-translate-y-0.5 transition">
            <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background-color:#59571B;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
            </div>
            <div>
              <p class="text-xs text-gray-500 leading-tight">Instagram</p>
              <p class="text-sm font-semibold text-amber-900 leading-tight">@BananaBlissSG</p>
            </div>
          </a>

          <a href="#" class="flex items-center gap-3 bg-[#FFFFFB] rounded-full shadow-md pl-3 pr-5 py-2.5 hover:-translate-y-0.5 transition">
            <div class="w-9 h-9 rounded-full flex items-center justify-center bg-amber-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </div>
            <div>
              <p class="text-xs text-gray-500 leading-tight">TikTok</p>
              <p class="text-sm font-semibold text-amber-900 leading-tight">@BananaBlissSG</p>
            </div>
          </a>

          <a href="#" class="flex items-center gap-3 bg-[#FFFFFB] rounded-full shadow-md pl-3 pr-5 py-2.5 hover:-translate-y-0.5 transition">
            <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background-color:#59571B;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 8.5s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.4 5.3 12 5.3 12 5.3h0s-4.4 0-7.1.3c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S1.7 10.1 1.7 11.8v1.6c0 1.6.3 3.3.3 3.3s.2 1.4.8 2c.8.8 1.8.7 2.3.8 1.6.2 6.9.3 6.9.3s4.4 0 7.1-.3c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.3-1.6.3-3.3v-1.6C22.2 10.1 22 8.5 22 8.5z"/><path d="M9.9 14.6V9l5.4 2.8-5.4 2.8z"/></svg>
            </div>
            <div>
              <p class="text-xs text-gray-500 leading-tight">YouTube</p>
              <p class="text-sm font-semibold text-amber-900 leading-tight">Banana Bliss Singapore</p>
            </div>
          </a>

        </div>
      </section>

      <!-- Customer Support -->
      <section class="bg-[#FFFFFB] rounded-2xl shadow-md p-8 md:p-12">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">Our Team Can Help With</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <p class="text-gray-700 leading-7 font-medium">• Menu and ingredient enquiries</p>
          <p class="text-gray-700 leading-7 font-medium">• Whole cake orders and customisations</p>
          <p class="text-gray-700 leading-7 font-medium">• Workshop and event registrations</p>
          <p class="text-gray-700 leading-7 font-medium">• Membership enquiries</p>
          <p class="text-gray-700 leading-7 font-medium">• Feedback and suggestions</p>
          <p class="text-gray-700 leading-7 font-medium">• Business and partnership opportunities</p>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="bg-[#FFFFFB] rounded-2xl shadow-md p-8 md:p-12">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-2 text-center">Contact Form</h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Fill in the form below and our team will get back to you as soon as possible.
        </p>

        <form
          id="contactForm"
          novalidate
          onsubmit="return window.validateContactForm(event)"
          class="max-w-2xl mx-auto space-y-6"
        >

          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label for="contactName" class="block text-sm font-semibold text-amber-900 mb-1">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="e.g. Victoria Neo"
                class="w-full rounded-lg border border-amber-200 px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
              <p class="error-msg hidden text-sm text-red-500 mt-1">Please enter your full name.</p>
            </div>

            <div>
              <label for="contactEmail" class="block text-sm font-semibold text-amber-900 mb-1">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contactEmail"
                name="contactEmail"
                placeholder="e.g. you@email.com"
                class="w-full rounded-lg border border-amber-200 px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
              <p class="error-msg hidden text-sm text-red-500 mt-1">Please enter a valid email address.</p>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label for="contactPhone" class="block text-sm font-semibold text-amber-900 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="contactPhone"
                name="contactPhone"
                placeholder="e.g. 8123 4567"
                class="w-full rounded-lg border border-amber-200 px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
              <p class="error-msg hidden text-sm text-red-500 mt-1">Please enter a valid phone number.</p>
            </div>

            <div>
              <label for="contactReason" class="block text-sm font-semibold text-amber-900 mb-1">
                Reason for Contact <span class="text-red-500">*</span>
              </label>
              <select
                id="contactReason"
                name="contactReason"
                class="w-full rounded-lg border border-amber-200 px-4 py-2.5 text-gray-700 bg-[#FFFFFB] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              >
                <option value="">Select a reason</option>
                <option value="menu">Menu and ingredient enquiries</option>
                <option value="cake">Whole cake orders and customisations</option>
                <option value="workshop">Workshop and event registrations</option>
                <option value="membership">Membership enquiries</option>
                <option value="feedback">Feedback and suggestions</option>
                <option value="partnership">Business and partnership opportunities</option>
                <option value="other">Other</option>
              </select>
              <p class="error-msg hidden text-sm text-red-500 mt-1">Please select a reason for contacting us.</p>
            </div>
          </div>

          <div>
            <label for="contactMessage" class="block text-sm font-semibold text-amber-900 mb-1">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              id="contactMessage"
              name="contactMessage"
              rows="5"
              placeholder="Tell us how we can help..."
              class="w-full rounded-lg border border-amber-200 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
            ></textarea>
            <p class="error-msg hidden text-sm text-red-500 mt-1">Please enter a message (at least 10 characters).</p>
          </div>

          <p id="contactFormSuccess" class="hidden text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
            Thank you! Your message has been sent — we'll get back to you shortly.
          </p>

          <div class="text-center">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-full font-semibold px-10 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition"
            >
              Send Message
            </button>
          </div>

        </form>

        <script>
          window.validateContactForm = function (event) {
            event.preventDefault();

            var form = document.getElementById("contactForm");
            var isValid = true;

            var fields = [
              {
                el: document.getElementById("contactName"),
                test: function (v) { return v.trim().length > 1; }
              },
              {
                el: document.getElementById("contactEmail"),
                test: function (v) { return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v.trim()); }
              },
              {
                el: document.getElementById("contactPhone"),
                test: function (v) { return v.trim() === "" || /^[0-9+()\\-\\s]{7,15}$/.test(v.trim()); }
              },
              {
                el: document.getElementById("contactReason"),
                test: function (v) { return v.trim() !== ""; }
              },
              {
                el: document.getElementById("contactMessage"),
                test: function (v) { return v.trim().length >= 10; }
              }
            ];

            fields.forEach(function (field) {
              var errorEl = field.el.parentElement.querySelector(".error-msg");
              var valid = field.test(field.el.value);

              if (!valid) {
                isValid = false;
                field.el.classList.add("border-red-400");
                field.el.classList.remove("border-amber-200");
                if (errorEl) errorEl.classList.remove("hidden");
              } else {
                field.el.classList.remove("border-red-400");
                field.el.classList.add("border-amber-200");
                if (errorEl) errorEl.classList.add("hidden");
              }
            });

            var successEl = document.getElementById("contactFormSuccess");

            if (isValid) {
              successEl.classList.remove("hidden");
              window.handleContactSubmit && window.handleContactSubmit(event, form);
              form.reset();
            } else {
              successEl.classList.add("hidden");
            }

            return false;
          };
        </script>
      </section>

      <!-- Visit Us -->
      <section class="text-center pb-2">
        <h2 class="text-2xl md:text-3xl font-bold text-amber-900 mb-3">Visit Us</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-2xl mx-auto">
          Drop by any of our Banana Bliss cafés to enjoy freshly baked banana desserts, handcrafted
          beverages and a cosy café experience. We look forward to welcoming you!
        </p>
      </section>

      <!-- CTA -->
      <section class="flex flex-wrap gap-4 justify-center pb-6">
        <a href="#/menu" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-900 border-2 border-amber-200 hover:-translate-y-0.5 transition">
          Explore Menu
        </a>
        <a href="#/locationx" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-[#F0DC92] text-amber-950 shadow-md hover:-translate-y-0.5 transition">
          View Locations
        </a>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}