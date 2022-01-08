import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ImageSlider from "../components/ImageGallary/ImageSlider";
import Button from "../components/FormElements/Button";

import classes from "./Product.module.css";
import Products from "../assets/product-list";

const Product = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(Products.find((p) => p.id === pid));

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
          <Button>Add to Cart</Button>
          <span className={classes.price}>${product.price} USD</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
