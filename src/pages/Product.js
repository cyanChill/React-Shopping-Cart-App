import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CartContext } from "../context/shopping-ctx";

import ImageSlider from "../components/ImageGallary/ImageSlider";
import Button from "../components/FormElements/Button";

import classes from "./Product.module.css";
import Products from "../assets/product-list";

const Product = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { pid } = useParams();
  const [product, setProduct] = useState(Products.find((p) => p.id === pid));

  const addItemHandler = () => {
    dispatch({
      type: "ADD",
      itemId: product.id,
      price: product.price,
      quantity: 1,
    });
    navigate("/cart");
  };

  if (!product) {
    return <div>Did not find product</div>;
  }

  return (
    <div className={classes.page}>
      <div className={classes.slider}>
        <ImageSlider images={product.images} gallaryCtrl="vertical" />
      </div>

      <div>
        {product.description}

        <div className={classes["cart-logic"]}>
          <Button onClick={addItemHandler}>Add to Cart</Button>
          <span className={classes.price}>${product.price} USD</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
