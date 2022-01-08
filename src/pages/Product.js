import { useState, useEffect, useContext } from "react";
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
  const [gallBtns, setGallBtns] = useState(
    document.body.clientWidth > 900 ? "vertical" : ""
  );

  const addItemHandler = () => {
    dispatch({
      type: "ADD",
      itemId: product.id,
      price: product.price,
      quantity: 1,
    });
    navigate("/cart");
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (gallBtns === "vertical" && entries[0].target.clientWidth < 900) {
        setGallBtns("");
      } else if (gallBtns === "" && entries[0].target.clientWidth >= 900) {
        setGallBtns("vertical");
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [gallBtns]);

  if (!product) {
    return <div>Did not find product</div>;
  }

  return (
    <div className={classes.page}>
      <div className={classes.slider}>
        <ImageSlider images={product.images} gallaryCtrl={gallBtns} />
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
