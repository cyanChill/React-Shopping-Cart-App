/*
  List of Product "types":
    1. clothing
    2. gamer-upsell
    3. accessories
*/

import classes from "./product-list.module.css";

const CategoryList = [
  "all",
  "favorites",
  "clothing",
  "gamer-upsell",
  "accessories",
];

const ProductsList = [
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
    favorite: false,
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
  {
    id: "banana-for-scale",
    name: "Banana For Scale",
    price: 9.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/ltttstore_SCBananaPlushies_TransparencyFile_800x.png?v=1635893188",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Untitled-1_1_800x.jpg?v=1635893285",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/7_1_800x.jpg?v=1635887334",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06126_1_800x.jpg?v=1635887334",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        Measure your electronics in style with the shortcircuit banana for scale
      </p>
    ),
  },
  {
    id: "beanie",
    name: "Beanie",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_Beanies_TransparencyFile_800x.png?v=1633716968",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/BlackBeanieV2-2000pxForWeb-85_800x.jpg?v=1633715353",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "cpu-pillow",
    name: "CPU Pillow",
    price: 69.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_CPUPillows_TrasparentFiles_800x.png?v=1633033131",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MG_3463_800x.jpg?v=1633033139",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MG_3462_800x.jpg?v=1633033139",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MG_3449_800x.jpg?v=1633033139",
      },
      {
        id: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MG_3483_800x.jpg?v=1633033139",
      },
      {
        id: 5,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/MG_3475_800x.jpg?v=1633033139",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        <span>
          Average throw pillows suck. They're super boring, and usually not that
          comfy.
        </span>
        <span>
          That's why we made the LTT CPU pillow. Constructed of & filled with
          high quality materials, this pillow is the perfect way to add an
          interesting techie display to your desk or your couch in two sizes.
        </span>
      </p>
    ),
  },
  {
    id: "crewneck-sweater",
    name: "Crewneck Sweater",
    price: 39.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_GreyCrewneck_TransparencyFile_800x.png?v=1633033256",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LTTGreySweaterWeb2000px-38_800x.jpg?v=1633033273",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LTTGreySweaterWeb2000px-40_800x.jpg?v=1633033273",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        This 100% cotton french terry sweater is designed to keep you warm on
        cold winter days. It features two stealth zippered pockets, and a small
        LTT logo on the left chest.
      </p>
    ),
  },
  {
    id: "dad-hat",
    name: "Dad Hat",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_DadHats_TransparencyFile_800x.png?v=1633033156",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/BlackLinus2Hats202109-2000pxForWeb-42_800x.jpg?v=1633033165",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Black1Hats202109-2000pxForWeb-38_800x.jpg?v=1633033165",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Black2Hats202109-2000pxForWeb-70_800x.jpg?v=1633033165",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <>
        <p className={classes.text}>Who knew dad style was this cool?</p>
        <br />
        <p className={classes.text}>
          All LTT Dad Hats features an LTT logo embroidered on the back (except
          the washed black RGB hat, which has no rear embroidery) and an
          adjustable strap. We're also offering a variety of LTT-and-Tech-Themed
          front embroideries in a number of colors.
        </p>
      </>
    ),
  },
  {
    id: "display-t-shirt",
    name: "Display T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_ScreenShirt_TransparencyFile_800x.png?v=1637800544",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06420_1_800x.jpg?v=1637800544",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06423_1_800x.jpg?v=1637800544",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "do-not-drop-t-shirt",
    name: "Do Not Drop T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_DoNotDropShirt_TransparencyFile_9d76649f-1da3-4f71-b56b-ba0d6d12eca5_800x.png?v=1633033197",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DoNotDropT-Shirt2000pxForWeb-7_b8bd0483-be41-4907-9543-df4987c125d2_800x.jpg?v=1627072002",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DoNotDropT-Shirt2000pxForWeb-22_0ef49606-ba41-4c56-b243-d4c6f915be96_800x.jpg?v=1627072004",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "ethernet-t-shirt",
    name: "Ethernet T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_EthernetT-Shirt_TransparencyFile_800x.png?v=1635878546",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06024_1_800x.jpg?v=1635876955",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06065_1_800x.jpg?v=1635876953",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "gpu-t-shirt",
    name: "GPU T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_GPUComponentsShirt_TransparencyFilepng_800x.png?v=1633033223",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC4818_800x.jpg?v=1633033226",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC4877_1_800x.jpg?v=1633033226",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC5027_800x.jpg?v=1633033226",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "hard-drive-shirt",
    name: "Hard Drive Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_HDDComponentsShirt_TransparencyFile_800x.png?v=1633033305",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/HDD_Shirt_Low-2_800x.jpg?v=1633033310",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/HDD_Shirt_Low-28_800x.jpg?v=1633033310",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "linus-plushie",
    name: "Linus Plushie",
    price: 24.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_LinusPlushies_TrasparentFiles_800x.png?v=1633033384",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LinusPlushies2000px-29_800x.jpg?v=1633033389",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LinusPlushies2000px-28_800x.jpg?v=1633033389",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LinusPlushies2000px-26_800x.jpg?v=1633033389",
      },
      {
        id: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LinusPlushies2000px-27_800x.jpg?v=1633033389",
      },
    ],
    favorite: false,
    type: ["gamer-upsell", "accessories"],
    description: (
      <p className={classes.text}>
        <span>
          "I want a holographic linus at my house so I can see him every day,
          not gonna lie." - Pewdiepie, 2021
        </span>
        <span>
          We'll it's not a hologram, but now you can have your very own linus at
          your house in cute plush form - with your choice of beard or no beard
          to match your favorite version of the tech tips man.
        </span>
      </p>
    ),
  },
  {
    id: "linus-selfie-mouse-pad",
    name: "Linus Selfie Mouse Pad",
    price: 24.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_MemeFaceDeskPad_TrasparentFiles_800x.png?v=1633033484",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LinusMemeFace2DeskPads202108-2000px-27_800x.jpg?v=1633033486",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LinusMemeFaceSetupDeskPads202108-2000px-10_800x.jpg?v=1633033486",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LinusMemeFaceCloseup1DeskPads202108-2000px-73_800x.jpg?v=1633033486",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        Put the most iconic piece of linus history on your desk. He sent u desk
        pad, pls respond.
      </p>
    ),
  },
  {
    id: "20-pack-ltt-cable-ties-first-edition",
    name: "LTT Cable Ties 20-Pack (White Printing, Black Tie)",
    price: 14.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_CableTie_TransparentFile_800x.png?v=1633033079",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06675_800x.jpeg?v=1633033083",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC06722_800x.jpeg?v=1633033083",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        <span>
          These are without question the greatest cable ties that we have every
          created. They feature quality hook and loop fasteners, a muted design,
          and two-sided printing so they'll work for any wrap orientation.
        </span>
        <span>
          Order now, so you can finally make your cable runs clean AF and rep
          LTT at the same time!
        </span>
      </p>
    ),
  },
  {
    id: "ltt-hat",
    name: "LTT Hat",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_LTTHats_TransparencyFile_800x.png?v=1633033405",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LMG_Hats-1_800x.jpg?v=1633033416",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "ltt-lanyard",
    name: "LTT Lanyard",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_Lanyards_TransparencyFilepng_800x.png?v=1633033342",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/AllLanyards2021-2000pxForWeb-59_800x.jpg?v=1633033368",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        <span>
          Constructed from a heavy-duty nylon weave, featuring a box-stitch link
          and a medium-pressure metal clasp, our LTT lanyards are built to last.
        </span>
        <span>They also look kewl.</span>
      </p>
    ),
  },
  {
    id: "ltt-stealth-hoodie",
    name: "LTT Stealth Hoodie",
    price: 59.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_StealthHoodie_TransparencyFile_800x.png?v=1633033708",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LMG_Black_Hoodie-5_800x.jpg?v=1633033721",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LMG_Black_Hoodie-10_800x.jpg?v=1633033721",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LMG_Black_Hoodie-16_800x.jpg?v=1633033721",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        <span>
          Created with premium french terry fabrics and a genuine YKK zipper,
          the LTT Stealth Hoodie is a fantastic light-weight, comfortable hoodie
          for most temperatures and climates.
        </span>
        <br />
        <span>
          Features 2 standard hoodie pockets, and 1 exterior phone pocket big
          enough to fit large pohones like the iPhone XS Max and Samsung Galaxy
          Note9.
        </span>
      </p>
    ),
  },
  {
    id: "memepillow",
    name: "Meme Face Sequin Pillow",
    price: 29.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_SequinPillows_TransparentFile_800x.png?v=1633033628",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC00005_800x.jpg?v=1633033641",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC00012_800x.jpg?v=1633033641",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC00040_800x.jpg?v=1633033641",
      },
      {
        id: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC00015_800x.jpg?v=1633033641",
      },
    ],
    favorite: false,
    type: ["gamer-upsell", "accessories"],
    description: (
      <p className={classes.text}>
        <span>
          If you've been searching for a way to display Linus' meme face in the
          comfort of your home, then look no further!
        </span>
        <span>
          <span className={classes.bold}>Disclaimer:</span> These pillows{" "}
          <span className={classes.italic}>aren't</span> perfect. Some sequins
          may spin on their thread, showing the blank white portion of the
          sequin rather than the print, and there may be gaps between some
          sequins, especially around the edges.
        </span>
        <span>
          We though these were fun enough to overlook these small issues, but if
          that will bug you then we would recommend against buying one!
        </span>
        <br />
        <span className={`${classes.bold} ${classes.italic}`}>
          Waring: Do not leave unattended in reach of young children. The
          sequins may detach and become a chocking hazard.
        </span>
      </p>
    ),
  },
  {
    id: "neon-hdd-t-shirt",
    name: "Neon HDD T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_GradientHDDShirt_TransparencyFile_800x.png?v=1635878526",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/HDDBlueandPurpleShirt-2000pxForWeb-17_800x.jpg?v=1635798769",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/HDDBlueandPurpleShirt-2000pxForWeb-8_800x.jpg?v=1635798763",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "party-shirt",
    name: "Party Shirt",
    price: 34.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_ComponentsButtonup_TransparencyFile_800x.png?v=1636656902",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Short-SleeveButtonUpShirt-2000pxForWeb-29_800x.jpg?v=1636655608",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Short-SleeveButtonUpShirt-2000pxForWeb-33_800x.jpg?v=1636655597",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        <span>
          Our first button-up, the LTT party shirt is designed to be light and
          cool enough to wear in the summer while showing off your techie nature
          with a cool patterned print.
        </span>
        <br />
        <span>
          Relaxed fit - we recommend sizing up if you're between sizes.
        </span>
      </p>
    ),
  },
  {
    id: "cpu-deconstructed-t-shirt",
    name: "Processor T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_CPUComponentsShirt_TransparencyFile_800x.png?v=1633033107",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/CPU_Shirt-2_800x.jpg?v=1633033111",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/CPU_Shirt-1_800x.jpg?v=1633033111",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "retro-gpu-t-shirt",
    name: "Retro GPU T-Shirt",
    price: 19.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_PixelGPUShirt_TrasparentFiles_800x.png?v=1633033532",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/GPUShirtBlue2000px-15_800x.jpg?v=1627678208",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/GPUShirtBlue2000px-13_800x.jpg?v=1627678209",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/GPUShirtBlue2000px-14_800x.jpg?v=1627678210",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: null,
  },
  {
    id: "sad-linus-desk-pad",
    name: "Sad Linus Desk Pad",
    price: 24.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_SadLinusDeskPad_TransparentFile_800x.png?v=1633033469",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/SadLinus2DeskPads202108-2000px-29_800x.jpg?v=1633033472",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/SadLinusSetupDeskPads202108-2000px-9_800x.jpg?v=1633033472",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/SadLinusCloseup1DeskPads202108-2000px-67_800x.jpg?v=1633033472",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        Look at him. He's so sad. Only you can make him happy... By buying a sad
        linus desk pad :)
      </p>
    ),
  },
  {
    id: "shortcircuit",
    name: "Shortcircuit Long-Sleeve Shirt",
    price: 24.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_ShortCircuitLongsleeve_TransparentFile_800x.png?v=1633033663",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/1MilSCShirt4000px-11_800x.jpg?v=1633033683",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/1MilSCShirt4000px-12_800x.jpg?v=1633033683",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/1MilSCShirt4000px-3_800x.jpg?v=1633033683",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        We're super excited to launch our first shortcircuit merch item!
        Unfortunately, we do find the sizing on these shirts to be a bit strange
        - especially the arms, which are longer than expected. You may need to
        roll those sleeves up a bit.
      </p>
    ),
  },
  {
    id: "spout-lid-for-ltt-water-bottle",
    name: "Spout Lid for LTT Water Bottle",
    price: 9.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_WaterBottleSpoutLid_TrasparentFiles_800x.png?v=1633033787",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LTTBottleLidForWeb2000px-6_800x.jpg?v=1633033792",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LTTBottleLidForWeb2000px-7_800x.jpg?v=1633033792",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LTTBottleLidForWeb2000px-9_800x.jpg?v=1633033792",
      },
    ],
    favorite: false,
    type: ["gamer-upsell", "accessories"],
    description: (
      <p className={classes.text}>
        <span className={classes.bold}>
          All new LTT water bottles come standard with this spout lid. If you
          have an older LTT bottle, or if you're buying a mystery bottle, you
          will receive the old lid, but all bottles sold under the "insulated
          water bottle" listing come standard with this lid.
        </span>
        <span>
          If you have previously purchased a bottle on your customer account,
          you should automatically see a 50% discount applied in the cart. If
          you are an owner of an LTT water bottle (logged in on your customer
          account) and the discount is not applied at checkout, please reach out
          to SUPPORT@LTTSTORE.COM
        </span>
        <span>
          Our spout lids will fit any size of LTT water bottle (and many others
          on the market, though we haven't certified anything outside of our own
          products).
        </span>
      </p>
    ),
  },
  {
    id: "swacket",
    name: "Swacket",
    price: 99.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_Swacket_TransparencyFile_800x.png?v=1638580343",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Swacket-2000pxForWeb-30_800x.jpg?v=1638580343",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Swacket-2000pxForWeb-25_800x.jpg?v=1638580343",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Swacket-2000pxForWeb-34_800x.jpg?v=1638580343",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        <span>
          An updated classic has arrived! Our swacket v2 follows similar
          inspiration to the original, with an updated design and consistent
          fabric throughout the whole garment.
        </span>
        <span>
          <span className={classes.bold}>
            Follow wash & dry instructions carefully.
          </span>{" "}
          The LTT print on the arm is quite heat-sensitive and may crack or fade
          if not properly cared for.
        </span>
        <span>
          <span className={classes.bold}>Keep away from rough surfaces.</span>{" "}
          The smooth fabric on the full body of the swacket may shed if rubbed
          against a rough surface.
        </span>
      </p>
    ),
  },
  {
    id: "sweatband-set",
    name: "Sweatband Set",
    price: 9.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_SweatBands_TransparencyFile_800x.png?v=1633033768",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LTTSweatBands2000px-10_800x.jpg?v=1633033772",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/LTTSweatBands2000px-17_800x.jpg?v=1633033772",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        <span>
          Each set includes 2 wristbands and 1 headband, all 100% cotton
        </span>
        <span>Wristband: 8cm width X 7cm height (3.1" X 2.8")</span>
        <span>Headband: 18cm width X 5cm height (7.1" X 2")</span>
        <br />
        <span>Wash in cold water, do not head dry.</span>
      </p>
    ),
  },
  {
    id: "tech-scarf",
    name: "Tech Scarf",
    price: 39.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_LTTScarves_TransparencyFile_800x.png?v=1633033430",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/P1010195_2_600x.jpg?v=1633033434",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/P1010114_800x.jpg?v=1633033434",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: <p className={classes.text}>80% Wool / 20% Acrylic</p>,
  },
  {
    id: "book",
    name: "The ABC's of Gaming - Board Book",
    price: 14.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_ABCsOfGaming_TransparencyFile_800x.png?v=1633033056",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Backcover_800x.jpg?v=1633033061",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/ABopenpage_800x.jpg?v=1633033061",
      },
    ],
    favorite: false,
    type: ["accessories"],
    description: (
      <p className={classes.text}>
        <span>
          The ABC's of gaming is Linus Media Group's first fully custom
          illustrated board book, and aims to provide a fun tech-themed ABC
          journey for both kids and adults.
        </span>
        <span>
          It's perfect to read aloud to kids ages 6M-3YR who are learning the
          alphabet, but the fun rhymes and bright illustrations can be enjoyed
          by older kids as well.
        </span>
      </p>
    ),
  },
  {
    id: "undies",
    name: "Underwear 3-Pack",
    price: 49.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Lttstore_LTTUnderwear_TrasparentFiles_800x.png?v=1633033024",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/IMG_6950_9471caf5-f6e8-4968-a998-896b9d9d0110_800x.jpg?v=1626457076",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC01115_370a2130-5096-4b47-8adb-7655b3267ef8_800x.jpg?v=1626456426",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/DSC01130_03c92287-dcaa-498a-b012-4e262f5116e3_800x.jpg?v=1626456424",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        <span>We have two different 3-packs available:</span>
        <span className={classes.list}>
          <span>1 Black W/ Orange Print</span>
          <span>1 Black W/ Blue Print</span>
          <span>1 Blue W/ Grey Print</span>
        </span>
        <span>and</span>
        <span className={classes.list}>
          <span>1 Black</span>
          <span>1 Black W/ Purple Print</span>
          <span>1 Aqua W/ WhitePrint</span>
        </span>
        <br />
        <span>
          Returns are only accepted for fully sealed, un-opened packs of
          underwear. If you have a concern with sizing after trying them on,
          please consult with our support team for further assistance.
        </span>
      </p>
    ),
  },
  {
    id: "wan",
    name: "Wan Hoodie",
    price: 89.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_WANHoodie_TransparencyFile_800x.png?v=1635296502",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/WANHoodieV2-2000pxForWeb-31_800x.jpg?v=1635293288",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/WANHoodieV2-2000pxForWeb-32_800x.jpg?v=1635293273",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/WANHoodieV2-2000pxForWeb-48_800x.jpg?v=1635293285",
      },
      {
        id: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/WANHoodieV2-2000pxForWeb-38_ea399e20-8b8b-46ad-a62d-4bbdd64a7c4e_800x.jpg?v=1635293544",
      },
    ],
    favorite: false,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        <span>The long-awaited wan hoodie is here!</span>
        <span>
          We modernized the style of this functional and technical hoodie, and
          upgraded the quality of its materials.
        </span>
        <span>
          This super comfy zip-up hoodie features 1 kanga pocket and 7
          additional pockets.
        </span>
      </p>
    ),
  },
  {
    id: "wan-sweatpants",
    name: "Wan Sweatpants",
    price: 89.99,
    images: [
      {
        id: 0,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/lttstore_WANSweatpants_TransparencyFile_800x.png?v=1641861488",
      },
      {
        id: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/WANSweatPants-2000pxForWeb-3_800x.jpg?v=1641579097",
      },
      {
        id: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/WANSweatPants-2000pxForWeb-4_800x.jpg?v=1641579097",
      },
      {
        id: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0058/4538/5314/products/WANSweatPants-2000pxForWeb-15_800x.jpg?v=1641579097",
      },
    ],
    favorite: true,
    type: ["clothing"],
    description: (
      <p className={classes.text}>
        <span>
          Designed to perfectly match our ever-popular wan hoodie, our wan
          sweatpants are here!
        </span>
        <span>Features:</span>
        <span className={classes.list}>
          <span>- Cotton/Poly blend french terry fabric</span>
          <span>- YKK Zippers</span>
          <span>- Tastefully placed orange accents</span>
          <span>- Wan logo stamp on left leg</span>
          <span>- Printed pocket bags with the iconic wan hexagons</span>
        </span>
      </p>
    ),
  },
];

export { CategoryList, ProductsList };
