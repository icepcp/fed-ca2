import Library, { initLibraryEvents } from "../lib/libraryEngine.js";
import Location from "../lib/location.js";

export default function LocationsPage() {
  const locationsData = Location();

  return `
    <main class="bg-amber-50 min-h-screen pb-16">
     <div class="relative rounded-2xl overflow-hidden shadow-lg border border-amber-200 h-[420px] mb-5">
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
    </main>
  `;
}

// Map Initialization Hook
export function initLocationsPage() {
  // 1. Initialize search bar & filter tags
  initLibraryEvents();

  const mapElement = document.getElementById("locations-map");
  if (!mapElement || typeof L === "undefined") return;

  const locationsData = Location();
  const outlets = locationsData.products;

  // 2. Initialize Leaflet Map
  const map = L.map("locations-map").setView([1.315, 103.86], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const markers = {};

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

  setTimeout(() => map.invalidateSize(), 100);

  // 3. Use Event Delegation for map clicks so it works seamlessly after search/filter re-renders
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".branch-card");
    if (!card) return;

    const lat = parseFloat(card.dataset.lat);
    const lng = parseFloat(card.dataset.lng);
    const name = card.dataset.name;

    if (lat && lng) {
      map.flyTo([lat, lng], 15, { duration: 1.2 });
      if (markers[name]) {
        markers[name].openPopup();
      }
      mapElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}
