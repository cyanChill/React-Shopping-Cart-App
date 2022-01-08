import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/shopping-ctx";
import Products from "../assets/product-list";

import CartItem from "../components/ShoppingCart/CartItem";
import Button from "../components/FormElements/Button";

import classes from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    const newCartItems = cart.map((item) => {
      const prod = Products.find((p) => p.id === item.id);
      return {
        id: item.id,
        name: prod.name,
        image: prod.images[0].image,
        quantity: item.quantity,
        price: item.price,
      };
    });

    setCartItems(newCartItems);
    setCartTotal(getCartTotal());
  }, [cart, getCartTotal]);

  if (cartItems.length === 0) {
    return (
      <div className={`${classes.page} ${classes.empty}`}>
        <p>Your Cart is Empty</p>
        <Button onClick={() => navigate("/")}>Shop Our Products</Button>
      </div>
    );
  }

  return (
    <div className={classes.page}>
      <div className={classes.wrapper}>
        <h1>Your Cart</h1>

        <div className={classes.cartItems}>
          {cartItems.map((p) => (
            <CartItem key={p.id} product={p} />
          ))}
        </div>

        <div className={classes.total}>
          <h3>Total: ${cartTotal} USD</h3>
          <p>Shipping & taxes calculated at checkout</p>
          <Button onClick={() => console.log("Checkout!")}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
