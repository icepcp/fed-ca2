import Library, { initLibraryEvents } from "../lib/libraryEngine.js";
import Location from "../lib/location.js";

export default function LocationsPage() {
  const locationsData = Location();

  return `
    <main class="bg-amber-50 min-h-screen pb-16">
     <div class="relative rounded-2xl overflow-hidden shadow-lg border border-amber-200 h-[420px]">
        <div class="absolute inset-0 z-0">
          <div id="locations-map" style="width:100%; height:100%;"></div>
        </div>

        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10 pointer-events-none"></div>

        <header class="relative z-20 p-8 pointer-events-none flex flex-col h-full justify-end">
          <h1 class="text-5xl font-bold text-white!">
            Our Locations
          </h1>
          <p class="text-lg text-white/90! -mt-3 text-xl/6">
            Find your nearest Banana Bliss Café and enjoy freshly baked banana
            desserts, handcrafted beverages and our warm café atmosphere.
          </p>
        </header>

      </div>

      ${Library(locationsData)}

      <div class="max-w-7xl mx-auto px-6 py-12 space-y-12">

        <!-- Branches Grid -->
        <section>
          <h2 class="text-3xl font-bold text-amber-900 mb-8">
            🍌 Our Branches
          </h2>

          <div class="grid lg:grid-cols-2 gap-8">

            <!-- Orchard -->
            <div 
              class="branch-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition-all"
              data-lat="1.3008"
              data-lng="103.8389"
              data-name="Orchard Central (Flagship)"
            >
              <img src="images/orchard.jpg" class="h-64 w-full object-cover">
              <div class="p-6">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl font-bold text-amber-900">Orchard Central (Flagship)</h3>
                  <span class="text-xs bg-amber-100 text-amber-900 px-2 py-1 rounded font-bold">Flagship</span>
                </div>

                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  181 Orchard Road #03-15 Orchard Central, Singapore 238896
                </p>

                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Mon–Thu: 10am – 9.30pm | Fri–Sat: 10am – 10pm | Sun & PH: 10am – 9.30pm
                </p>

                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Largest outlet</li>
                  <li>Full menu available</li>
                  <li>Workshops & events</li>
                </ul>
              </div>
              <p class="text-gray-700 leading-6">
                181 Orchard Road<br>#03-15 Orchard Central<br>Singapore 238896
              </p>
            </div>

            <!-- Jewel -->
            <div 
              class="branch-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition-all"
              data-lat="1.3602"
              data-lng="103.9898"
              data-name="Jewel Changi Airport"
            >
              <img src="images/jewel.jpg" class="h-64 w-full object-cover">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">Jewel Changi Airport</h3>
                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  78 Airport Boulevard #02-218 Jewel Changi Airport, Singapore 819666
                </p>
                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Daily: 9am – 10pm
                </p>
                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Perfect for travellers</li>
                  <li>Seasonal desserts</li>
                </ul>
              </div>
              <p class="text-gray-700 leading-7">
                Mon – Thu: 10:00 AM – 9:30 PM<br>
                Fri – Sat: 10:00 AM – 10:00 PM<br>
                Sun & PH: 10:00 AM – 9:30 PM
              </p>
            </div>

            <!-- VivoCity -->
            <div 
              class="branch-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition-all"
              data-lat="1.2644"
              data-lng="103.8223"
              data-name="VivoCity"
            >
              <img src="images/vivocity.jpg" class="h-64 w-full object-cover">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">VivoCity</h3>
                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  1 HarbourFront Walk #02-105 VivoCity, Singapore 098585
                </p>
                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Daily: 10am – 10pm
                </p>
                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Family-friendly seating</li>
                  <li>Signature cakes & beverages</li>
                </ul>
              </div>
              <p class="text-gray-700 leading-6">
                78 Airport Boulevard<br>#02-218 Jewel Changi Airport<br>Singapore 819666
              </p>
            </div>

            <!-- Bugis -->
            <div 
              class="branch-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition-all"
              data-lat="1.2995"
              data-lng="103.8550"
              data-name="Bugis Junction"
            >
              <img src="images/bugis.jpg" class="h-64 w-full object-cover">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-amber-900">Bugis Junction</h3>
                <p class="mt-4 text-gray-700">
                  <strong>📍 Address</strong><br>
                  200 Victoria Street #01-48 Bugis Junction, Singapore 188021
                </p>
                <p class="mt-4 text-gray-700">
                  <strong>🕒 Opening Hours</strong><br>
                  Mon–Thu: 10am – 9.30pm | Fri–Sun: 10am – 10pm
                </p>
                <ul class="mt-4 list-disc list-inside text-gray-700">
                  <li>Student-friendly promotions</li>
                  <li>Quick takeaway service</li>
                </ul>
              </div>
              <p class="text-gray-700 leading-7">
                Daily: 9:00 AM – 10:00 PM
              </p>
            </div>

            <p class="text-sm font-semibold text-amber-900 mb-1">Highlights</p>
            <ul class="text-gray-700 leading-7 space-y-1">
              <li>• Perfect for travellers</li>
              <li>• Seasonal drinks and desserts</li>
              <li>• Gift boxes available</li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  `;
}

// Map Initialization Hook
export function initLocationsPage() {
  const mapElement = document.getElementById("locations-map");
  if (!mapElement || typeof L === "undefined") return;

  // Outlet Coordinates & Metadata
  const outlets = [
    {
      name: "Orchard Central (Flagship)",
      lat: 1.3008,
      lng: 103.8389,
      address: "181 Orchard Rd #03-15",
    },
    {
      name: "Jewel Changi Airport",
      lat: 1.3602,
      lng: 103.9898,
      address: "78 Airport Blvd #02-218",
    },
    {
      name: "VivoCity",
      lat: 1.2644,
      lng: 103.8223,
      address: "1 HarbourFront Walk #02-105",
    },
    {
      name: "Bugis Junction",
      lat: 1.2995,
      lng: 103.855,
      address: "200 Victoria St #01-48",
    },
  ];

  // Initialize Map centered on Central Singapore
  const map = L.map("locations-map").setView([1.315, 103.86], 11);

  // Add OpenStreetMap Tile Layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Store marker references for interactive focus
  const markers = {};

  // Add pin markers with styled popups
  outlets.forEach((outlet) => {
    const marker = L.marker([outlet.lat, outlet.lng]).addTo(map);

    marker.bindPopup(`
      <div class="p-1 text-center">
        <strong style="color: #78350f; font-size: 14px;">🍌 Banana Bliss</strong><br>
        <span style="font-weight: bold; font-size: 13px;">${outlet.name}</span><br>
        <small style="color: #4b5563;">${outlet.address}</small>
      </div>
    `);

    markers[outlet.name] = marker;
  });

  // Fix Leaflet tile rendering glitch in SPAs
  setTimeout(() => map.invalidateSize(), 100);

  // Add click handlers on branch cards to fly to map locations
  const cards = document.querySelectorAll(".branch-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const lat = parseFloat(card.dataset.lat);
      const lng = parseFloat(card.dataset.lng);
      const name = card.dataset.name;

      if (lat && lng) {
        // Pan smoothly to location and open popup
        map.flyTo([lat, lng], 15, { duration: 1.2 });
        if (markers[name]) {
          markers[name].openPopup();
        }

        // Scroll map into view smoothly
        mapElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
}
