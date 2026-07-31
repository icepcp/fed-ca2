export default function SustainabilityPage() {
  return `
  <main class="bg-[#fdfaf3] text-[#241c12] font-sans">

    <!-- HERO -->
    <section class="relative overflow-hidden bg-[#14210f] text-[#fdfaf3] px-6 md:px-16 pt-20 pb-24">
      <div class="absolute inset-x-0 top-0 h-14 opacity-20" style="background-image: radial-gradient(circle, #f5b83a 1.5px, transparent 1.5px); background-size: 18px 18px;"></div>

      <div class="max-w-3xl relative">
        <div class="font-mono text-xs uppercase tracking-[0.25em] text-[#fcd34d]/80 mb-5">
          Sustainability &amp; Sourcing
        </div>
        <h1 class="font-serif font-semibold text-5xl md:text-6xl leading-[1.05] mb-6">
          Fresh Ingredients.
          <br />
          <span class="text-[#fcd34d]">Better Choices.</span>
        </h1>
        <p class="text-lg text-[#fdfaf3]/85 max-w-xl leading-relaxed mb-10">
          At Banana Bliss, we believe that great desserts begin with great ingredients.
          Every cake, pastry and drink is made using carefully selected produce to ensure
          freshness, flavour and quality. We are committed to responsible sourcing and
          environmentally friendly practices that help us care for both our customers and
          the planet.
        </p>

        <div class="max-w-md">
          <div class="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#bef264]/75 mb-2">
            <span>Green</span>
            <span>Peak Ripeness</span>
            <span>Overripe</span>
          </div>
          <div class="relative h-3 rounded-full overflow-hidden bg-[#2b421f]">
            <div class="absolute inset-0" style="background: linear-gradient(90deg,#4d7c0f 0%,#a3e635 30%,#facc15 55%,#d97706 78%,#78350f 100%);"></div>
            <div class="absolute top-1/2 -translate-y-1/2 left-[55%] -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#b45309] shadow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESPONSIBLY SOURCED BANANAS -->
    <section class="px-6 md:px-16 py-20 max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
      <div class="md:col-span-3">
        <div class="font-mono text-xs uppercase tracking-[0.2em] text-[#b45309]/80 mb-4">Where it starts</div>
        <h2 class="font-serif font-semibold text-3xl md:text-4xl text-[#3d2b12] mb-5">
          Responsibly Sourced Bananas
        </h2>
        <p class="text-[#4a4033] leading-relaxed text-[15px]">
          We work with trusted suppliers who provide fresh, high-quality bananas that are
          harvested at the perfect stage of ripeness. By partnering with responsible farms,
          we help support sustainable farming practices while ensuring every dessert is
          naturally delicious.
        </p>
      </div>

      <div class="md:col-span-2 bg-[#14210f] rounded-2xl p-8">
        <h3 class="font-serif text-[#fdfaf3] text-lg font-medium mb-5">Our Commitment</h3>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Z"/><path d="M12 8v13"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Fresh bananas delivered daily</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-4-2-8-7-11-2 3-4 5-4 8a4 4 0 0 0 4 4"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Carefully selected quality ingredients</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Support for responsible farming practices</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Z"/><path d="M12 8v13"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Seasonal ingredients whenever possible</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- QUALITY INGREDIENTS -->
    <section class="bg-[#fbf1de] px-6 md:px-16 py-20">
      <div class="max-w-6xl mx-auto">
        <div class="font-mono text-xs uppercase tracking-[0.2em] text-[#b45309]/80 mb-4">What goes in</div>
        <h2 class="font-serif font-semibold text-3xl md:text-4xl text-[#3d2b12] mb-5">Quality Ingredients</h2>
        <p class="text-[#4a4033] leading-relaxed text-[15px] max-w-2xl mb-8">
          Quality is at the heart of everything we create. Along with fresh bananas, we use
          premium ingredients such as fresh dairy, rich chocolate, locally sourced eggs and
          high-quality flour to ensure every bite is full of flavour.
        </p>
        <div class="font-mono text-xs uppercase tracking-widest text-[#92400e]/70 mb-4">We Use</div>
        <div class="flex flex-wrap gap-3">
          <span class="text-sm text-[#3d2f1c] bg-white border border-[#f2d49b] rounded-full px-4 py-2 shadow-sm">Fresh ripe bananas</span>
          <span class="text-sm text-[#3d2f1c] bg-white border border-[#f2d49b] rounded-full px-4 py-2 shadow-sm">Premium dairy products</span>
          <span class="text-sm text-[#3d2f1c] bg-white border border-[#f2d49b] rounded-full px-4 py-2 shadow-sm">Quality chocolate &amp; cocoa</span>
          <span class="text-sm text-[#3d2f1c] bg-white border border-[#f2d49b] rounded-full px-4 py-2 shadow-sm">Fresh eggs</span>
          <span class="text-sm text-[#3d2f1c] bg-white border border-[#f2d49b] rounded-full px-4 py-2 shadow-sm">Natural ingredients, no unnecessary additives</span>
        </div>
      </div>
    </section>

    <!-- PACKAGING + WASTE -->
    <section class="px-6 md:px-16 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

      <div class="bg-[#14210f] rounded-2xl p-8 flex flex-col">
        <div class="w-9 h-9 rounded-full bg-[#f5b83a]/20 text-[#fcd34d] flex items-center justify-center mb-5">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H5a2 2 0 0 1-1.73-3l7-12a2 2 0 0 1 3.46 0l1.98 3.43M15 19h2a2 2 0 0 0 1.73-3l-1.4-2.42M2.5 15h9.9M7.5 8.5 4 15l3.5 6.5M16.5 8.5 20 15l-3.5 6.5"/></svg>
        </div>
        <h3 class="font-serif font-semibold text-2xl text-[#fdfaf3] mb-3">Eco-Friendly Packaging</h3>
        <p class="text-[#fdfaf3]/80 text-[15px] leading-relaxed mb-6">
          We're taking steps to reduce our environmental impact by choosing packaging that
          is kinder to the planet. Many of our takeaway containers, cups and paper bags are
          made from recyclable or biodegradable materials, helping reduce unnecessary waste.
        </p>
        <ul class="space-y-4 mt-auto">
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H5a2 2 0 0 1-1.73-3l7-12a2 2 0 0 1 3.46 0l1.98 3.43"/><path d="M2.5 15h9.9"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Recyclable paper bags</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Z"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Biodegradable takeaway boxes</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Paper straws</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#a3e635]/20 text-[#bef264]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l-1 5H9L8 2Z"/><path d="M9 7c-2 3-3 5-3 8a6 6 0 0 0 12 0c0-3-1-5-3-8"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#fdfaf3]/90">Reusable drink tumblers available for purchase</span>
          </li>
        </ul>
      </div>

      <div class="bg-white border border-[#f2d49b] rounded-2xl p-8 flex flex-col">
        <div class="w-9 h-9 rounded-full bg-[#fde68a] text-[#92400e] flex items-center justify-center mb-5">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Z"/><path d="M12 8v13"/></svg>
        </div>
        <h3 class="font-serif font-semibold text-2xl text-[#3d2b12] mb-3">Reducing Food Waste</h3>
        <p class="text-[#4a4033] text-[15px] leading-relaxed mb-6">
          At Banana Bliss, we believe good food should never go to waste. We carefully plan
          our daily production to minimise leftovers while ensuring every customer enjoys
          freshly prepared desserts.
        </p>
        <ul class="space-y-4 mt-auto">
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Z"/><path d="M12 8v13"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Bake fresh in small batches throughout the day</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Donate selected unsold items to local community organisations when possible</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-4-2-8-7-11-2 3-4 5-4 8a4 4 0 0 0 4 4"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Reuse suitable ingredients in seasonal recipes where food safety allows</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l-1 5H9L8 2Z"/><path d="M9 7c-2 3-3 5-3 8a6 6 0 0 0 12 0c0-3-1-5-3-8"/></svg>
            </span>
            <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Encourage customers to bring reusable cups for takeaway drinks</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- PROMISE -->
    <section class="relative overflow-hidden bg-[#14210f] text-[#fdfaf3] px-6 md:px-16 py-24">
      <div class="absolute inset-x-0 bottom-0 h-14 opacity-20 rotate-180" style="background-image: radial-gradient(circle, #f5b83a 1.5px, transparent 1.5px); background-size: 18px 18px;"></div>
      <div class="max-w-3xl mx-auto text-center relative">
        <div class="font-mono text-xs uppercase tracking-[0.2em] text-[#fcd34d]/80 mb-4">Our sustainability promise</div>
        <p class="font-serif font-medium text-2xl md:text-[28px] leading-snug text-[#fdfaf3] mb-6">
          Sustainability is part of every decision we make. From sourcing fresh ingredients
          to reducing waste and using environmentally friendly packaging, we are committed
          to creating a café that customers can enjoy with confidence.
        </p>
        <p class="text-[#fdfaf3]/70 text-[15px] leading-relaxed">
          As Banana Bliss continues to grow, we will continue exploring new ways to reduce
          our environmental footprint while maintaining the quality and comfort our
          customers love.
        </p>
      </div>
    </section>

    <!-- WHY IT MATTERS -->
    <section class="px-6 md:px-16 py-20 max-w-4xl mx-auto">
      <div class="font-mono text-xs uppercase tracking-[0.2em] text-[#b45309]/80 mb-4">Why it matters</div>
      <h2 class="font-serif font-semibold text-3xl md:text-4xl text-[#3d2b12] mb-8">
        By supporting Banana Bliss, you're helping us
      </h2>
      <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-5">
        <li class="flex items-start gap-3">
          <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          </span>
          <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Support responsible ingredient sourcing</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Z"/><path d="M12 8v13"/></svg>
          </span>
          <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Reduce food waste</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H5a2 2 0 0 1-1.73-3l7-12a2 2 0 0 1 3.46 0l1.98 3.43"/><path d="M2.5 15h9.9"/></svg>
          </span>
          <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Encourage eco-friendly habits</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l-1 5H9L8 2Z"/><path d="M9 7c-2 3-3 5-3 8a6 6 0 0 0 12 0c0-3-1-5-3-8"/></svg>
          </span>
          <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Promote reusable products</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-0.5 flex-shrink-0 rounded-full p-1.5 bg-[#fde68a] text-[#92400e]">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-4-2-8-7-11-2 3-4 5-4 8a4 4 0 0 0 4 4"/></svg>
          </span>
          <span class="text-[15px] leading-relaxed text-[#3d2f1c]">Create a greener future for our community</span>
        </li>
      </ul>
    </section>

  </main>
  `;
}