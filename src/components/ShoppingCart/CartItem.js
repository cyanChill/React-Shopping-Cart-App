import { useContext } from "react";

import { CartContext } from "../../context/shopping-ctx";

import InteractiveQuantity from "./InteractiveQuantity";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { dispatch } = useContext(CartContext);
  const { id, name, image, quantity, price } = props.product;

  const handleIncrease = () => {
    dispatch({ type: "ADD", itemId: id, price, quantity: 1 });
  };

  const handleDecrease = () => {
    dispatch({ type: "REMOVE", itemId: id, price, quantity: 1 });
  };

  const handleSet = (amount) => {
    dispatch({ type: "SET", itemId: id, price, quantity: amount });
  };

  const handleRemove = (amount) => {
    dispatch({ type: "SET", itemId: id, price, quantity: 0 });
  };

  return (
    <div className={classes["cart-item"]}>
      <div className={classes.image}>
        <img src={image} alt={name} />
      </div>

      <div className={classes.detail}>
        <div className={classes.row}>
          <p className={classes.title}>{name}</p>
          <p className={classes.price}>${price} USD</p>
        </div>

        <div className={classes.interaction}>
          <InteractiveQuantity
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onSet={handleSet}
          />
          <p className={classes.removeBtn} onClick={handleRemove}>
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
