export default function Menu() {
  return {
    categories: [
      {
        id: "signature-cakes",
        name: "Signature Cakes",
        description: "Handcrafted daily using fresh organic bananas.",
      },
      {
        id: "drinks",
        name: "Drinks & Smoothies",
        description: "Espresso drinks, banana shakes, and refreshers.",
      },
      {
        id: "fresh-baked",
        name: "Freshly Baked Pastries",
        description: "Freshly baked pastries made daily using quality ingredients for a warm and delicious treat.",
      },
      {
        id: "desserts",
        name: "Sweet Desserts",
        description: "indulgent desserts crafted with fresh bananas and premium ingredients for every sweet craving.",
      },
      {
        id: "seasonal",
        name: "Seasonal Specials",
        description: "Limited-time banana-inspired creations made with seasonal ingredients, bringing fresh flavours to every visit.",
      },
    ],
    products: [
      {
        id: "cake-01",
        name: "Naked Banana Cake",
        description:
          "Classic banana cake topped with smooth cream cheese frosting",
        categoryId: "signature-cakes",
        price: 7.9,
        image: "/assets/images/menu/cakes/naked-banana.jpeg",
        tags: ["Bestseller"]
      },
      {
        id: "cake-02",
        name: "Chocolate Banana Cake",
        description:
          "Rich chocolate sponge layered with fresh banana cream",
        categoryId: "signature-cakes",
        price: 8.5,
        image: "/assets/images/menu/cakes/chocolate.jpeg",
      },
      {
        id: "cake-03",
        name: "Caramel Banana Cake",
        description:
          "Banana sponge topped with caramel drizzle and toasted walnuts",
        categoryId: "signature-cakes",
        price: 8.9,
        image: "/assets/images/menu/cakes/caramel.jpeg",
        tags: ["Chef Recommended"]
      },
      {
        id: "cake-04",
        name: "Walnut Banana Loaf",
        description:
          "Moist banana loaf baked with crunchy walnuts",
        categoryId: "signature-cakes",
        price: 6.5,
        image: "/assets/images/menu/cakes/walnut.jpeg",
      },
      {
        id: "drink-01",
        name: "Iced Banana Latte",
        description:
          "Double shot espresso poured over creamy banana-infused milk.",
        categoryId: "drinks",
        price: 6.5,
        image: "/assets/images/menu/drinks/banana-latte.jpeg",
        tags: ["Bestseller", "Chef Recommended"]
      },
      {
        id: "drink-02",
        name: "Signature Latte",
        categoryId: "drinks",
        price: 6.5,
        image: "/assets/images/menu/drinks/signature-latte.png",
        tags: ["Bestseller"]
      },
      {
        id: "drink-03",
        name: "Cappuccino",
        categoryId: "drinks",
        price: 6.5,
        image: "/assets/images/menu/drinks/cappuccino.jpeg",
        tags: ["Bestseller"]
      },
      {
        id: "drink-04",
        name: "Classic Banana Smoothie",
        description:
          "Fresh bananas blended with milk and honey",
        categoryId: "drinks",
        price: 6.5,
        image: "/assets/images/menu/drinks/smoothies/banana.jpeg",
      },
      {
        id: "drink-05",
        name: "Strawberry Banana Smoothie",
        description:
          "Strawberries blended with bananas and topped with whipped cream",
        categoryId: "drinks",
        price: 7.2,
        image: "/assets/images/menu/drinks/smoothies/strawberry.jpeg",
      },
      {
        id: "drink-06",
        name: "Tropical Banana Smoothie",
        description:
          "Banana, mango and pineapple blended together",
        categoryId: "drinks",
        price: 7.5,
        image: "/assets/images/menu/drinks/smoothies/tropical.jpeg",
        tags: ["Bestseller"]
      },
      {
        id: "drink-07",
        name: "Banana Milkshake",
        description:
          "Vanilla ice cream blended with bananas and whipped cream",
        categoryId: "drinks",
        price: 7.8,
        image: "/assets/images/menu/drinks/milkshakes/banana.jpeg",
      },
      {
        id: "drink-08",
        name: "Chocolate Banana Milkshake",
        description:
          "Chocolate milkshake mixed with fresh bananas",
        categoryId: "drinks",
        price: 8.2,
        image: "/assets/images/menu/drinks/milkshakes/chocolate.jpeg",
        tags: ["Bestseller"]
      },
      {
        id: "pastries-01",
        name: "Banana Cupcake",
        description:
          "Freshly baked banana cupcake with crunchy walnut pieces",
        categoryId: "fresh-baked",
        price: 3.8,
        image: "/assets/images/menu/cakes/cupcake.jpg",
        tags: ["Bestseller"]
      },
      {
        id: "pastries-02",
        name: "Sweet Bliss Cookies",
        description:
          "Freshly baked buttery cookies filled with rich chocolate chips, offering a soft, chewy texture with crisp golden edges in every bite",
        categoryId: "fresh-baked",
        price: 3.8,
        image: "/assets/images/menu/pastries/cookies.jpeg",
      },
      {
        id: "desserts-01",
        name: "Banana Waffles",
        description:
          "Golden waffles served with fresh banana slices, vanilla ice cream and chocolate sauce",
        categoryId: "desserts",
        price: 3.8,
        image: "/assets/images/menu/desserts/waffle.jpeg",
      },
      {
        id: "desserts-02",
        name: "Banana Pudding",
        description:
          "Homemade banana pudding layered with biscuits and whipped cream",
        categoryId: "desserts",
        price: 3.8,
        image: "/assets/images/menu/desserts/pudding.jpeg",
        tags: ["Bestseller", "Chef Recommended"]
      },
      {
        id: "seasonal-01",
        name: "Summer Banana Mango Smoothie",
        description:
          "Limited-time tropical smoothie made with fresh bananas and juicy mangoes",
        categoryId: "seasonal",
        price: 7.9,
        image: "/assets/images/menu/desserts/pudding.jpeg",
        tags: ["Bestseller"]
      },
      {
        id: "seasonal-02",
        name: "Banana Biscoff Cake",
        description:
          "Freshly baked banana cake layered with creamy Biscoff spread and topped with crunchy Lotus Biscoff biscuit crumbs",
        categoryId: "seasonal",
        price: 7.9,
        image: "/assets/images/menu/desserts/pudding.jpeg",
        tags: ["Bestseller"]
      }
    ],
  };
}
