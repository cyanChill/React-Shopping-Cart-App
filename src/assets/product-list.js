/*
  Probably should pre-format the product info and description fields as JSX instead of just strings
*/

const Products = [
  {
    id: "indoor-hoodie",
    name: "Indoor Hoodie",
    price: 49.99,
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_IndoorHoodie_TransparencyFile_1200x.png?v=1639789670",
    favorite: true,
    type: ["Clothing"],
    productInfo: ["58% cotton 38% polyester 4% spandex"],
    description: [
      "This hoodie is designed to maintain maximum comfort while lounging around the house or gaming. With a smooth finish on the cotton/poly/spandex blend, both sides of the fabric should feel soft and cool.",
    ],
  },
  {
    id: "case-t-shirt",
    name: "Case T-Shirt",
    price: 19.99,
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_PCCaseShirt_Transparency_1200x.png?v=1637800524",
    favorite: true,
    type: ["Clothing"],
    productInfo: [
      "Small - XX-Large Printed on American Apparel 50/50 Polyblend T-Shirts",
      "XXX-Large Printed on Alstyle or Fruit of the Loom 100% Cotton T-Shirts",
    ],
    description: [],
  },
  {
    id: "insulated-water-bottle",
    name: "Insulated Water Bottle",
    price: 29.99,
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/ALLV2LTTBottlesWithShadows1200x1200_1200x.png?v=1632950283",
    favorite: true,
    type: ["Gear"],
    productInfo: [],
    description: [
      "All updated LTT water bottles come standard with the new spout lid instead of the old screw-off top.",
      "Show off your inner techie in style with the LTT vacuum-insulated water bottle.",
      "Linus Tech Tips vacuum insulated water bottles are intended to keep hot drinks hot for up to 8 hours, and cold drinks cold for up to 16 hours.",
      "Holds 21 or 40 fluid ounces (620ml or 1.18L), depending on your preferred size.",
      "Important safety notes:",
      "THIS PRODUCT IS NOT DISHWARSHER SAFE",
      "DO NOT PLACE IN THE MICROWAVE",
      "DO NOT PLACE OR STORE IN THE FREEZER",
      "THIS PRODUCT IS NOT DESIGNED FOR THE LONGTERM STORAGE OF LIQUIDS",
    ],
  },
  {
    id: "ltt-northern-lights-desk-pad",
    name: "LTT Northern Lights Desk Pad",
    price: 29.99,
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_NorthernLightsDeskPad_TransparencyFile_1200x.png?v=1633033500",
    favorite: true,
    type: ["Gear"],
    productInfo: [
      "Surface: Soft Smooth Micro-texture Cloth",
      "Base: 3.5mm Non-slip eco-friendly natural rubber base",
      "Edge: Anti-fray stitching",
    ],
    description: [
      "The LTT Northern Lights Desk Pad features a dynamic and colorful design on the left, and a clear mousing area on the right.",
    ],
  },
];

export default Products;
