export default function Location() {
  return {
    categories: [
      {
        id: "north",
        name: "North",
        description: "",
      },
      {
        id: "east",
        name: "East",
        description: "",
      },
      {
        id: "south",
        name: "South",
        description: "",
      },
      {
        id: "west",
        name: "West",
        description: "",
      },
    ],
    products: [
      {
        id: "north-01",
        name: "Causeway Point",
        description: "🕒 Opening Hours:<br> Mon-Thu: 10am - 9.30pm <br> Fri-Sat: 10am - 10pm <br> Sun & PH: 10am - 9.30pm",
        address: "1 Woodlands Sq, Singapore 738099",
        categoryId: "north",
        image: "/assets/images/locations/causeway.png",
        lat: 1.4360933,
        lng: 103.7833722
      },
      {
        id: "east-01",
        name: "Jewel Changi Airport",
        description: "🕒 Opens Daily: 9am - 10pm",
        address: "60 Airport Blvd., Singapore 819643",
        categoryId: "east",
        image: "/assets/images/locations/jewel.png",
        lat: 1.3602094,
        lng: 103.9871849
      },
      {
        id: "south-01",
        name: "Orchard Central",
        description: "🕒 Opening Hours:<br> Mon-Thu: 10am - 9.30pm <br> Fri-Sun: 10am - 10pm",
        address: "181 Orchard Rd, Singapore 238896",
        categoryId: "south",
        image: "/assets/images/locations/orchard.png",
        lat: 1.3007639,
        lng: 103.8371487,
        tags: ["Flagship"]
      },
      {
        id: "west-01",
        name: "Westgate",
        description: "🕒 Opens Daily: 10am - 10pm",
        address: "3 Gateway Dr, Singapore 608532",
        categoryId: "west",
        image: "/assets/images/locations/westgate.png",
        lat: 1.334382,
        lng: 103.7402087,
        tags: ["Flagship"]
      },
    ],
  };
}
