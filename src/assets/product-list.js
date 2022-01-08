/*
  Probably should pre-format the product info and description fields as JSX instead of just strings
*/

import classes from "./product-list.module.css";

const Products = [
  {
    id: "indoor-hoodie",
    name: "Indoor Hoodie",
    price: 49.99,
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_IndoorHoodie_TransparencyFile_1200x.png?v=1639789670",
    images: [
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/GamerHoodies-2000pxForWeb-68_86c60002-e0c9-405f-8101-d5be552f2d7f_700x.jpg?v=1639789670",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/GamerHoodies-2000pxForWeb-74_700x.jpg?v=1639789670",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/GamerHoodies-2000pxForWeb-70_832b68b1-ec26-486a-b611-c2bfbc3f8df8_700x.jpg?v=1639789670",
      },
      {
        id: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/GamerHoodies-2000pxForWeb-78_700x.jpg?v=1639789670",
      },
    ],
    favorite: true,
    type: ["Clothing"],
    description: (
      <div>
        <p className={classes.title}>Indoor Hoodie</p>
        <p className={classes.text}>
          This hoodie is designed to maintain maximum comfort while lounging
          around the house or gaming. With a smooth finish on the
          cotton/poly/spandex blend, both sides of the fabric should feel soft
          and cool.
        </p>
      </div>
    ),
  },
  {
    id: "case-t-shirt",
    name: "Case T-Shirt",
    price: 19.99,
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_PCCaseShirt_Transparency_1200x.png?v=1637800524",
    images: [],
    favorite: true,
    type: ["Clothing"],
    description: [],
  },
  {
    id: "insulated-water-bottle",
    name: "Insulated Water Bottle",
    price: 29.99,
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/ALLV2LTTBottlesWithShadows1200x1200_1200x.png?v=1632950283",
    images: [],
    favorite: true,
    type: ["Gear"],
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
    images: [],
    favorite: true,
    type: ["Gear"],
    description: [
      "The LTT Northern Lights Desk Pad features a dynamic and colorful design on the left, and a clear mousing area on the right.",
    ],
  },
];

export default Products;
