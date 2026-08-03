export default function Merch() {
  return {
    categories: [
      {
        id: "cafe-merch",
        name: "Café Merchandise",
        description:
          "Every item is thoughtfully designed with our signature café aesthetic and crafted using quality materials that are both stylish and practical.",
      },
      {
        id: "bliss-ingredients",
        name: "Homemade Ingredients",
        description: "Bring banana bliss home with our in-house ingredients",
      },
    ],
    products: [
      {
        id: "merch-01",
        name: "Canvas Tote Bag",
        description:
          "Eco-friendly canvas tote featuring the Banana Bliss logo.",
        categoryId: "cafe-merch",
        price: 18.9,
        image: "/assets/images/menu/merch/tote.jpeg",  
      },
      {
        id: "merch-02",
        name: "Ceramic Mug",
        description:
          "Minimalist ceramic mug perfect for coffee, tea or hot chocolate.",
        categoryId: "cafe-merch",
        price: 15.9,
        image: "/assets/images/menu/merch/mug.jpeg",  
      },
      {
        id: "merch-03",
        name: "Reusable Tumbler",
        description:
          "Stainless steel tumbler that keeps drinks hot or cold for hours.",
        categoryId: "cafe-merch",
        price: 28.9,
        image: "/assets/images/menu/merch/bottle.jpeg",  
      },
      {
        id: "merch-04",
        name: "Dessert Plate Set",
        description:
          "Stainless steel tumbler that keeps drinks hot or cold for hours.",
        categoryId: "cafe-merch",
        price: 28.9,
        image: "/assets/images/menu/merch/plate.jpeg",  
      },
      {
        id: "ingredients-01",
        name: "House Blend Coffee Beans",
        description:
          "Premium roasted coffee beans that pair perfectly with our desserts.",
        categoryId: "bliss-ingredients",
        price: 28.9,
        image: "/assets/images/menu/merch/beans.jpeg",
      },
      {
        id: "ingredients-02",
        name: "Signature Banana Jam",
        description: "Homemade banana jam with a hint of cinnamon.",
        categoryId: "bliss-ingredients",
        price: 28.9,
        image: "/assets/images/menu/merch/jam.jpeg",
      },
      {
        id: "ingredients-03",
        name: "Banana Bread Baking Mix",
        description: "Bake Banana Bliss banana bread easily at home.",
        categoryId: "bliss-ingredients",
        price: 28.9,
        image: "/assets/images/menu/merch/bakingmix.jpeg",
      },
      {
        id: "ingredients-04",
        name: "Banana Bliss Gift Box",
        description: "Includes Signature Banana Jam, House Blend Coffee Beans, Ceramic Mug Mini Banana Cookie Pack",
        categoryId: "bliss-ingredients",
        price: 28.9,
        image: "/assets/images/menu/merch/giftbox.jpeg",
        tags: ["Bestseller", "250g"]
      },
    ],
  };
}
