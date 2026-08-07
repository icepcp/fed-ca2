export default function HomePage() {
  return `
    <main class="home-page">
      <!-- Hero Banner -->
      <section class="hero">
        <div class="hero-content">
          <span class="hero-tag">A Cozy Banana Escape</span>
          <h1 class="text-3xl/12">Experience Banana Bliss</h1>
          <p class="-mt-5">
            Freshly baked banana desserts, handcrafted drinks,
            and warm café moments made just for you.
          </p>

          <div class="hero-buttons flex gap-4">
            <a href="#/menu" class="hero-btn button">
              Explore Menu
            </a>
            <a href="#/about" class="secondary-btn button">
              About Us
            </a>
          </div>
        </div>
      </section>

      <!-- Welcome Section -->
      <section class="welcome">
        <div class="welcome-text">
          <h2>Warm Vibes. Quality Ingredients.</h2>
          <p>
            At Banana Bliss, we believe every dessert should be made with
            fresh bananas, quality ingredients and lots of love.
            Whether you're craving a slice of our signature banana cake
            or a refreshing smoothie, we promise a cosy café experience
            you'll always remember.
          </p>
        </div>
      </section>

      <!-- Quick Categories -->
      <section class="flex flex-col gap-16 md:gap-20 mt-12 md:mt-16">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="flex justify-center" style="perspective: 1400px;">
            <div id="carouselCakes" class="category-carousel relative cursor-grab active:cursor-grabbing" style="width: 280px; height: 280px; transform-style: preserve-3d;">
              <img src="/assets/images/menu/cakes/naked-banana.jpeg" alt="Naked Banana Cake" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/menu/cakes/chocolate.jpeg" alt="Chocolate Banana Cake" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/menu/cakes/caramel.jpeg" alt="Caramel Banana Cake" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/menu/cakes/walnut.jpeg" alt="Banana Biscoff Cake" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
            </div>
          </div>
          <div>
            <h3 class="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Signature Cakes</h3>
            <p class="text-gray-700 leading-8 mb-6">
              Discover our signature banana cakes, freshly baked with ripe bananas and carefully selected
              ingredients. From timeless favourites to indulgent creations, every slice is made to bring out
              the naturally sweet and comforting flavour of banana.
            </p>
            <a href="#/menu?category=cakes" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
              View Menu
            </a>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="order-2 md:order-1">
            <h3 class="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Drinks</h3>
            <p class="text-gray-700 leading-8 mb-6">
              Refresh yourself with our signature banana drinks, blended with creamy, delicious ingredients
              for the perfect treat. From fruity favourites to rich and indulgent blends, there's a drink
              for every banana lover.
            </p>
            <a href="#/menu?category=drinks" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
              View Menu
            </a>
          </div>
          <div class="order-1 md:order-2 flex justify-center" style="perspective: 1400px;">
            <div id="carouselDrinks" class="category-carousel relative cursor-grab active:cursor-grabbing" style="width: 280px; height: 280px; transform-style: preserve-3d;">
              <img src="/assets/images/menu/drinks/milkshakes/banana.jpeg" alt="Banana Milkshake" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/menu/drinks/smoothies/banana.jpeg" alt="Banana Smoothie" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/menu/drinks/banana-latte.jpeg" alt="Iced Banana Latte" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/menu/drinks/smoothies/strawberry.jpeg" alt="Strawberry Banana Smoothie" class="carousel-slide absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md" draggable="false" />
            </div>
          </div>
        </div>

        <div class="category-card grid-cols-1! lg:grid-cols-2!">
          <img src="/assets/images/promos/promo.jpeg" alt="Promotions">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="flex justify-center" style="perspective: 1400px;">
            <div id="carouselPromos" class="category-carousel relative cursor-grab active:cursor-grabbing" style="width: 280px; height: 218px; transform-style: preserve-3d;">
              <img src="/assets/images/promos/promo.jpeg" alt="Current Promotion" class="carousel-slide absolute inset-0 w-full h-full object-contain bg-amber-50 rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/promos/studentcombo.png" alt="Student Combo Promo" class="carousel-slide absolute inset-0 w-full h-full object-contain bg-amber-50 rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/promos/giftbox.png" alt="Gift Box Promo" class="carousel-slide absolute inset-0 w-full h-full object-contain bg-amber-50 rounded-2xl shadow-md" draggable="false" />
              <img src="/assets/images/promos/borthday.png" alt="Birthday Promo" class="carousel-slide absolute inset-0 w-full h-full object-contain bg-amber-50 rounded-2xl shadow-md" draggable="false" />
            </div>
          </div>
          <div>
            <h3 class="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Promotions</h3>
            <p class="text-gray-700 leading-8 mb-6">
              Enjoy more of your favourite banana treats for less! Discover our latest deals, seasonal
              specials, and exclusive offers on selected cakes, drinks, and more.
            </p>
            <a href="#/promotions" class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition">
              View Promos
            </a>
          </div>
        </div>

      </section>
      <!-- Featured Products -->
      <section>
        <h2 class="text-3xl md:text-5xl font-bold text-amber-900 mt-8 mb-6">
          Featured Bestsellers
        </h2>

        <div class="grid lg:grid-cols-3 gap-5 md:gap-6">
          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img 
              src="/assets/images/menu/cakes/naked-banana.jpeg" 
              alt="Naked Banana Cake" 
              class="w-full aspect-square object-cover" 
            />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900 mb-1">Naked Banana Cake</h3>
              <p class="text-gray-700 leading-6 text-sm">
                A soft and moist banana cake, lightly layered with smooth cream.
              </p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img 
              src="/assets/images/menu/cakes/chocolate.jpeg" 
              alt="Chocolate Banana Cake" 
              class="w-full aspect-square object-cover" 
            />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900 mb-1">Chocolate Banana Cake</h3>
              <p class="text-gray-700 leading-6 text-sm">
                Rich chocolate paired with sweet bananas.
              </p>
            </div>
          </div>

          <div class="bg-[#FFFFFB] rounded-2xl shadow-md overflow-hidden">
            <img 
              src="/assets/images/menu/drinks/smoothies/banana.jpeg" 
              alt="Banana Smoothie" 
              class="w-full aspect-square object-cover" 
            />
            <div class="p-6">
              <h3 class="text-lg font-bold text-amber-900 mb-1">Banana Smoothie</h3>
              <p class="text-gray-700 leading-6 text-sm">
                Creamy, refreshing and naturally sweet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Promotion Banner -->
      <section class="rounded-2xl p-8 md:p-12 text-center mt-8" style="background-color:#604630;">
        <h2 class="text-3xl md:text-5xl font-bold mb-4" style="color:#FFFFFF;">Current Promotion</h2>
        <p class="text-lg leading-8 max-w-2xl mx-auto mb-6" style="color:#FFEFD1;">
          Buy any Signature Banana Cake and enjoy <strong style="color:#FFFFFF;">20% OFF</strong> your second slice.
        </p>
        <a 
          href="#/promotions" 
          class="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-amber-400 text-amber-950 shadow-md hover:-translate-y-0.5 transition"
        >
          See All Promotions
        </a>
      </section>

      <!-- Footer -->
      <footer class="pt-4 pb-10 border-t border-amber-200 text-center">
        <p class="font-semibold text-lg text-[#59571B]">
          Made fresh, one banana at a time.
        </p>
      </footer>
    </main>
  `;
}
function initCoverflow(containerId) {
  var track = document.getElementById(containerId);
  if (!track) return;

  var slides = Array.prototype.slice.call(track.querySelectorAll(".carousel-slide"));
  var count = slides.length;
  var anglePerSlide = 360 / count;

  var width = track.offsetWidth || 280;
  var radius = Math.round(width / (2 * Math.tan(Math.PI / count)));

  slides.forEach(function (slide, i) {
    slide.style.transform = "rotateY(" + (i * anglePerSlide) + "deg) translateZ(" + radius + "px)";
    slide.style.backfaceVisibility = "hidden";
  });

  var currentRotation = 0;
  var isDragging = false;
  var startX = 0;
  var startRotation = 0;
  var autoRotateTimeout = null;
  var animationFrameId = null;

  function applyRotation(rotation) {
    track.style.transform = "rotateY(" + rotation + "deg)";
    slides.forEach(function (slide, i) {
      var effectiveAngle = ((i * anglePerSlide + rotation) % 360 + 360) % 360;
      if (effectiveAngle > 180) effectiveAngle -= 360;
      var closeness = 1 - Math.min(Math.abs(effectiveAngle) / (anglePerSlide / 2), 1);
      slide.style.opacity = (0.4 + closeness * 0.6).toFixed(2);
    });
  }

  function autoRotateStep() {
    if (!isDragging) {
      currentRotation -= 0.3;
      applyRotation(currentRotation);
    }
    animationFrameId = requestAnimationFrame(autoRotateStep);
  }

  function startAutoRotate(delay) {
    clearTimeout(autoRotateTimeout);
    autoRotateTimeout = setTimeout(function () {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(autoRotateStep);
      }
    }, delay || 0);
  }

  function stopAutoRotate() {
    clearTimeout(autoRotateTimeout);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function pointerDown(e) {
    isDragging = true;
    stopAutoRotate();
    startX = e.clientX;
    startRotation = currentRotation;
    track.style.transition = "";
    track.setPointerCapture && track.setPointerCapture(e.pointerId);
  }

  function pointerMove(e) {
    if (!isDragging) return;
    currentRotation = startRotation + (e.clientX - startX) * 0.4;
    applyRotation(currentRotation);
  }

  function pointerUp() {
    if (!isDragging) return;
    isDragging = false;
    startAutoRotate(1000);
  }

  track.addEventListener("pointerdown", pointerDown);
  window.addEventListener("pointermove", pointerMove);
  window.addEventListener("pointerup", pointerUp);

  applyRotation(0);
  startAutoRotate(0);
}

export function initHomePage() {
  initCoverflow("carouselCakes");
  initCoverflow("carouselDrinks");
  initCoverflow("carouselPromos");
}