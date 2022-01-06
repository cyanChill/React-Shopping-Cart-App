import { Link } from "react-router-dom";

import Card from "../UI/Card";

import classes from "./ProductCategories.module.css";
import categoryClothing from "../../assets/images/category-clothing.png";
import categoryGear from "../../assets/images/category-gear.png";

const ProductCategories = () => {
  return (
    <div className={classes.categories}>
      <Link to="/collections/clothing">
        <Card className={classes.category}>
          <h3>Clothing</h3>
          <img src={categoryClothing} alt="Clothing" />
        </Card>
      </Link>

      <Link to="/collections/gear">
        <Card className={classes.category}>
          <h3>Gear</h3>
          <img src={categoryGear} alt="Gear" />
        </Card>
      </Link>
    </div>
  );
};

export default ProductCategories;
