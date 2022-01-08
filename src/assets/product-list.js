/*
  List of Product "types":
    1. clothing
    2. gamer-upsell
    3. accessories
    4. clothing
*/

import classes from "./product-list.module.css";

const Products = [
  {
    id: "indoor-hoodie",
    name: "Indoor Hoodie",
    price: 49.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_IndoorHoodie_TransparencyFile_1200x.png?v=1639789670",
      },
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
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        This hoodie is designed to maintain maximum comfort while lounging
        around the house or gaming. With a smooth finish on the
        cotton/poly/spandex blend, both sides of the fabric should feel soft and
        cool.
      </p>
    ),
  },
  {
    id: "case-t-shirt",
    name: "Case T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_PCCaseShirt_Transparency_1200x.png?v=1637800524",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06403_1_800x.jpg?v=1637800524",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06447_1_800x.jpg?v=1637800524",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06481_1_800x.jpg?v=1637800524",
      },
    ],
    favorite: true,
    type: ["clothing"],
    description: null,
  },
  {
    id: "insulated-water-bottle",
    name: "Insulated Water Bottle",
    price: 29.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/ALLV2LTTBottlesWithShadows1200x1200_1200x.png?v=1632950283",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/ALL21ozV2LTTBottles-2000pxForWeb-1_800x.jpg?v=1632941644",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Black_Orange21ozV2-1-2000pxForWeb-8_800x.jpg?v=1632941648",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Black_Orange21ozV2-2-2000pxForWeb-9_800x.jpg?v=1632941653",
      },
      {
        id: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Black_Orange21ozV2-3-2000pxForWeb-39_800x.jpg?v=1632941643",
      },
    ],
    favorite: true,
    type: ["accessories"],
    description: (
      <>
        <p className={classes.text}>
          <span className={classes.bold}>
            All updated LTT water bottles come standard with the new spout lid
            instead of the old screw-off top.
          </span>
          <span>
            Show off your inner techie in style with the LTT vacuum-insulated
            water bottle.
          </span>
          <span>
            Linus Tech Tips vacuum insulated water bottles are intended to keep
            hot drinks hot for up to 8 hours, and cold drinks cold for up to 16
            hours.
          </span>
          <span>
            Holds 21 or 40 fluid ounces (620ml or 1.18L), depending on your
            preferred size.
          </span>
        </p>
        <br />
        <p className={classes.text}>
          <span>Important safety notes:</span>
          <span className={classes.list}>
            <span className={classes.bold}>
              THIS PRODUCT IS NOT DISHWARSHER SAFE
            </span>
            <span>Do not place in the microwave</span>
            <span>Do not place or store in the freezer</span>
            <span>
              This product is not designed for the long term storage of liquids
            </span>
          </span>
        </p>
      </>
    ),
  },
  {
    id: "ltt-northern-lights-desk-pad",
    name: "LTT Northern Lights Desk Pad",
    price: 29.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_NorthernLightsDeskPad_TransparencyFile_1200x.png?v=1633033500",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MousePadsBoxes-1000x4001_800x.jpg?v=1607732650",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MousePadsOverhead-1000x4002_800x.jpg?v=1607732135",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MousePadsWithSetup-1000x400_800x.jpg?v=1607732337",
      },
    ],
    favorite: true,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        The LTT Northern Lights Desk Pad features a dynamic and colorful design
        on the left, and a clear mousing area on the right.
      </p>
    ),
  },
];

export default Products;
