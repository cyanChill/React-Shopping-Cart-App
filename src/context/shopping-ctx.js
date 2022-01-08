import React, { useReducer, useCallback } from "react";

const CartContext = React.createContext({
  cart: [],
  dispatch: (payload) => {},
  getCartTotal: () => {},
});

const cartReducer = (cartState, action) => {
  const { type } = action;

  if (type === "ADD" || type === "SET" || type === "REMOVE") {
    // Stuff we're guaranteed to have if we have either of these calls
    const inCart = cartState.find((p) => p.id === action.itemId);
    const { itemId, price, quantity } = action;

    if (isNaN(quantity)) return cartState;

    if (type === "ADD") {
      if (inCart) {
        return cartState.map((p) => {
          if (p.id !== itemId) return p;
          return { ...p, quantity: p.quantity + quantity };
        });
      } else {
        return [...cartState, { id: itemId, price, quantity }];
      }
    } else if (type === "SET") {
      if (quantity <= 0) {
        return cartState.filter((p) => p.id !== itemId);
      } else {
        return cartState.map((p) => {
          if (p.id !== itemId) return p;
          return { ...p, quantity: quantity };
        });
      }
    } else if (type === "REMOVE") {
      if (inCart) {
        if (inCart.quantity - quantity <= 0) {
          return cartState.filter((p) => p.id !== itemId);
        } else {
          return cartState.map((p) => {
            if (p.id !== itemId) return p;
            return { ...p, quantity: p.quantity - quantity };
          });
        }
      } else {
        return cartState;
      }
    }
  } else {
    return cartState;
  }
};

const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const getCartTotal = useCallback(() => {
    return cart
      .reduce((total, curr) => {
        return total + curr.price * curr.quantity;
      }, 0)
      .toFixed(2);
  }, [cart]);

  const cartValues = {
    cart: cart,
    dispatch,
    getCartTotal,
  };

  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
