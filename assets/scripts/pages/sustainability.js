export default function SustainabilityPage() {
  return `
    <main class="bg-amber-50 min-h-screen flex flex-col gap-y-5">

      <header>
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 leading-tight mt-4">
              Fresh Ingredients. Better Choices.
            </h1>
            <p class="text-base md:text-lg text-amber-800 leading-8 max-w-3xl mt-6">
              At Banana Bliss, we believe that great desserts begin with great ingredients. Every cake, pastry
              and drink is made using carefully selected produce to ensure freshness, flavour and quality. We
              are committed to responsible sourcing and environmentally friendly practices that help us care
              for both our customers and the planet.
            </p>
          </div>
          <video
            src="/assets/videos/sustainability.mov"
            class="w-full shadow-md pointer-events-none"
            autoplay
            muted
            loop
            playsinline
            disablepictureinpicture
            disableremoteplayback
          ></video>
        </div>
      </header>

      <!-- Intro -->
      <section>
        <p class="text-base md:text-lg text-amber-800 leading-8 max-w-3xl mt-4">
          At Banana Bliss, we believe that great desserts begin with great ingredients. Every cake, pastry
          and drink is made using carefully selected produce to ensure freshness, flavour and quality. We
          are committed to responsible sourcing and environmentally friendly practices that help us care
          for both our customers and the planet.
        </p>
      </section>

      <!-- Responsibly Sourced Bananas -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-4">Responsibly Sourced Bananas</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mb-6">
          We work with trusted suppliers who provide fresh, high-quality bananas that are harvested at the
          perfect stage of ripeness. By partnering with responsible farms, we help support sustainable
          farming practices while ensuring every dessert is naturally delicious.
        </p>

        <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
          <p class="text-sm font-semibold text-amber-900 mb-3">Our Commitment</p>
          <ul class="text-gray-700 leading-7 space-y-1">
            <li>• Fresh bananas delivered daily</li>
            <li>• Carefully selected quality ingredients</li>
            <li>• Support for responsible farming practices</li>
            <li>• Seasonal ingredients whenever possible</li>
          </ul>
        </div>
      </section>

      <!-- Behind the Scenes -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-4">From Farm to Café</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mb-6">
          A look at the sourcing, packaging and everyday choices behind every Banana Bliss dessert.
        </p>

        <div class="flex justify-center" style="perspective: 1400px;">
          <div id="sustainabilityCarousel" class="relative cursor-grab active:cursor-grabbing" style="width: 340px; height: 240px; transform-style: preserve-3d;">
            <img src="/assets/images/sustainability/sustainability.png" alt="Fresh bananas on the plant" class="carousel-slide absolute inset-0 w-full h-full object-cover shadow-md" draggable="false" />
            <img src="/assets/images/sustainability/bananachopping.jpeg" alt="Banana chopping" class="carousel-slide absolute inset-0 w-full h-full object-cover shadow-md" draggable="false" />
            <img src="/assets/images/sustainability/bananatree.png" alt="Fresh ingredients on display" class="carousel-slide absolute inset-0 w-full h-full object-cover shadow-md" draggable="false" />
            <img src="/assets/images/sustainability/baking.jpg" alt="Baking" class="carousel-slide absolute inset-0 w-full h-full object-cover shadow-md" draggable="false" />
          </div>
        </div>

        <p class="text-center text-sm text-gray-500 mt-4">Drag left or right to rotate</p>
      </section>
      <!-- Quality Ingredients -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-4">Quality Ingredients</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mb-6">
          Quality is at the heart of everything we create. Along with fresh bananas, we use premium
          ingredients such as fresh dairy, rich chocolate, locally sourced eggs and high-quality flour to
          ensure every bite is full of flavour.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

          <div class="bg-white rounded-2xl shadow-md p-5 text-center">
            <div class="w-11 h-11 mx-auto rounded-full flex items-center justify-center mb-3 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l4 6-10 13L2 8z"/><path d="M2 8h20M10 2l2 6-2 13M14 2l-2 6 2 13"/></svg>
            </div>
            <p class="text-sm font-semibold text-amber-900">Fresh Ripe Bananas</p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-5 text-center">
            <div class="w-11 h-11 mx-auto rounded-full flex items-center justify-center mb-3" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
            </div>
            <p class="text-sm font-semibold text-amber-900">Premium Dairy</p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-5 text-center">
            <div class="w-11 h-11 mx-auto rounded-full flex items-center justify-center mb-3 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/></svg>
            </div>
            <p class="text-sm font-semibold text-amber-900">Quality Chocolate</p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-5 text-center">
            <div class="w-11 h-11 mx-auto rounded-full flex items-center justify-center mb-3" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="14" rx="7" ry="8"/></svg>
            </div>
            <p class="text-sm font-semibold text-amber-900">Fresh Eggs</p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-5 text-center">
            <div class="w-11 h-11 mx-auto rounded-full flex items-center justify-center mb-3 bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <p class="text-sm font-semibold text-amber-900">No Unnecessary Additives</p>
          </div>

        </div>
      </section>

      <!-- Eco-Friendly Packaging -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-4">Eco-Friendly Packaging</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mb-6">
          We're taking steps to reduce our environmental impact by choosing packaging that is kinder to the
          planet. Many of our takeaway containers, cups and paper bags are made from recyclable or
          biodegradable materials, helping reduce unnecessary waste.
        </p>

        <div class="grid sm:grid-cols-2 gap-5 md:gap-6">

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7 flex gap-4 items-start">
            <div class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/></svg>
            </div>
            <p class="text-gray-700 leading-7 pt-2">Recyclable paper bags</p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7 flex gap-4 items-start">
            <div class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </div>
            <p class="text-gray-700 leading-7 pt-2">Biodegradable takeaway boxes</p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7 flex gap-4 items-start">
            <div class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l4 6-10 13L2 8z"/><path d="M2 8h20"/></svg>
            </div>
            <p class="text-gray-700 leading-7 pt-2">Paper straws</p>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 md:p-7 flex gap-4 items-start">
            <div class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <p class="text-gray-700 leading-7 pt-2">Reusable drink tumblers available for purchase</p>
          </div>

        </div>
      </section>

      <!-- Reducing Food Waste -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-4">Reducing Food Waste</h2>
        <p class="text-base md:text-lg text-gray-700 leading-8 max-w-3xl mb-6">
          At Banana Bliss, we believe good food should never go to waste. We carefully plan our daily
          production to minimise leftovers while ensuring every customer enjoys freshly prepared desserts.
        </p>

        <div class="bg-white rounded-2xl shadow-md p-6 md:p-7">
          <p class="text-sm font-semibold text-amber-900 mb-3">Our Food Waste Initiatives</p>
          <ul class="text-gray-700 leading-7 space-y-1">
            <li>• Bake fresh in small batches throughout the day</li>
            <li>• Donate selected unsold items to local community organisations when possible</li>
            <li>• Reuse suitable ingredients in seasonal recipes where food safety allows</li>
            <li>• Encourage customers to bring reusable cups for takeaway drinks</li>
          </ul>
        </div>
      </section>

      <!-- Our Sustainability Promise -->
      <section class="rounded-2xl p-8 md:p-12" style="background-color:#59571B;">
        <h2 class="text-3xl md:text-5xl font-bold mb-5" style="color:#FDF6DC;">Our Sustainability Promise</h2>
        <p class="text-base md:text-lg leading-8 max-w-3xl mb-4" style="color:#E7E4CC;">
          Sustainability is part of every decision we make. From sourcing fresh ingredients to reducing
          waste and using environmentally friendly packaging, we are committed to creating a café that
          customers can enjoy with confidence.
        </p>
        <p class="text-base md:text-lg leading-8 max-w-3xl" style="color:#E7E4CC;">
          As Banana Bliss continues to grow, we will continue exploring new ways to reduce our
          environmental footprint while maintaining the quality and comfort our customers love.
        </p>
      </section>

      <!-- Why It Matters -->
      <section class="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">By Supporting Banana Bliss, You're Helping Us</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6 text-left">

          <div class="flex flex-col items-start gap-3">
            <div class="w-11 h-11 rounded-full flex items-center justify-center bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l4 6-10 13L2 8z"/></svg>
            </div>
            <p class="text-gray-700 font-medium">Support responsible ingredient sourcing</p>
          </div>

          <div class="flex flex-col items-start gap-3">
            <div class="w-11 h-11 rounded-full flex items-center justify-center" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6"/></svg>
            </div>
            <p class="text-gray-700 font-medium">Reduce food waste</p>
          </div>

          <div class="flex flex-col items-start gap-3">
            <div class="w-11 h-11 rounded-full flex items-center justify-center bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13 11 11"/></svg>
            </div>
            <p class="text-gray-700 font-medium">Encourage eco-friendly habits</p>
          </div>

          <div class="flex flex-col items-start gap-3">
            <div class="w-11 h-11 rounded-full flex items-center justify-center" style="background-color:#59571B;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6DC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
            </div>
            <p class="text-gray-700 font-medium">Promote reusable products</p>
          </div>

          <div class="flex flex-col items-start gap-3">
            <div class="w-11 h-11 rounded-full flex items-center justify-center bg-amber-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A2F08" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-4 4-6 7-6 10a6 6 0 0 0 12 0c0-3-2-6-6-10z"/></svg>
            </div>
            <p class="text-gray-700 font-medium">Create a greener future for our community</p>
          </div>

        </div>
      </section>

      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">Made fresh, one banana at a time.</p>
      </footer>

    </main>
  `;
}

export function initSustainabilityPage() {
  var track = document.getElementById("sustainabilityCarousel");
  if (!track) return;

  var slides = Array.prototype.slice.call(track.querySelectorAll(".carousel-slide"));
  var count = slides.length;
  var anglePerSlide = 360 / count;

  var width = track.offsetWidth;
  var radius = Math.round(width / (2 * Math.tan(Math.PI / count)));

  slides.forEach(function (slide, i) {
    slide.style.transform = "rotateY(" + (i * anglePerSlide) + "deg) translateZ(" + radius + "px)";
    slide.style.backfaceVisibility = "hidden";
  });

  var currentRotation = 0;
  var isDragging = false;
  var startX = 0;
  var startRotation = 0;

  function applyRotation(rotation) {
    track.style.transform = "rotateY(" + rotation + "deg)";

    slides.forEach(function (slide, i) {
      var effectiveAngle = ((i * anglePerSlide + rotation) % 360 + 360) % 360;
      if (effectiveAngle > 180) effectiveAngle -= 360;
      var closeness = 1 - Math.min(Math.abs(effectiveAngle) / (anglePerSlide / 2), 1);
      var opacity = 0.35 + closeness * 0.65;
      slide.style.opacity = opacity.toFixed(2);
    });
  }

  function pointerDown(e) {
    isDragging = true;
    startX = e.clientX;
    startRotation = currentRotation;
    track.setPointerCapture && track.setPointerCapture(e.pointerId);
  }

  function pointerMove(e) {
    if (!isDragging) return;
    var deltaX = e.clientX - startX;
    var deltaRotation = deltaX * 0.4;
    currentRotation = startRotation + deltaRotation;
    applyRotation(currentRotation);
  }

  function pointerUp() {
    if (!isDragging) return;
    isDragging = false;

    var nearestSlideRotation = Math.round(currentRotation / anglePerSlide) * anglePerSlide;
    currentRotation = nearestSlideRotation;
    track.style.transition = "transform 0.4s ease";
    applyRotation(currentRotation);

    setTimeout(function () {
      track.style.transition = "";
    }, 400);
  }

  track.addEventListener("pointerdown", pointerDown);
  window.addEventListener("pointermove", pointerMove);
  window.addEventListener("pointerup", pointerUp);

  applyRotation(0);
}