import { Link } from "react-router-dom";

import Card from "../UI/Card";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.product}>
      <Card>
        <Link to={`./products/${props.id}`}>
          <img src={props.image} alt={props.name} />
        </Link>
      </Card>

      <div className={classes.description}>
        <h3>
          <Link to={`./products/${props.id}`}>{props.name}</Link>
        </h3>

        <p>${props.price} USD</p>
      </div>
    </div>
  );
};

export default ProductItem;
