import React, {
  useState,
  useReducer,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { FirebaseContext } from "./firebase-ctx";

const CartContext = React.createContext({
  cart: [],
  dispatch: (payload) => {},
  getCartTotal: () => {},
  getNumItems: () => {},
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
  } else if (type === "INITIALIZE") {
    return action.cart;
  } else {
    return cartState;
  }
};

const CartProvider = (props) => {
  const { isLoggedIn, auth, firestore } = useContext(FirebaseContext);
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  const getCartTotal = useCallback(() => {
    return Number(
      cart
        .reduce((total, curr) => {
          return total + curr.price * curr.quantity;
        }, 0)
        .toFixed(2)
    );
  }, [cart]);

  const getNumItems = useCallback(() => {
    return Number(
      cart.reduce((total, curr) => {
        return total + curr.quantity;
      }, 0)
    );
  }, [cart]);

  /* 
    Internal functions used to repopulate cart data on login/logout 
    with database/local storage data 
  */
  const populateCart = useCallback((savedCart) => {
    dispatch({
      type: "INITIALIZE",
      cart: savedCart,
    });
  }, []);

  /* Fetching Shopping Cart */
  const FetchShoppingCart = useCallback(async () => {
    if (isLoggedIn) {
      const cartsRef = firestore
        .collection("shopping-carts")
        .doc(auth.currentUser.uid);

      const cartData = await new Promise((resolve, reject) => {
        cartsRef.get().then((doc) => {
          if (doc.exists) {
            resolve(doc.data());
          } else {
            resolve({ cart: [] });
          }
        });
      });

      populateCart(cartData.cart);
    }
  }, [populateCart, isLoggedIn, firestore]);

  const reloadCartData = useCallback(async () => {
    setIsLoading(true);

    if (isLoggedIn) {
      await FetchShoppingCart();
    } else {
      const localCart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
      populateCart(localCart);
    }

    setIsLoading(false);
  }, [isLoggedIn]);

  useEffect(() => {
    reloadCartData();
  }, [reloadCartData]);

  useEffect(() => {
    setIsLoading(true);

    if (isLoggedIn) {
      const cartsRef = firestore
        .collection("shopping-carts")
        .doc(auth.currentUser.uid);

      cartsRef
        .set({ cart: cart })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((err) => console.log(`Error writing document: ${err}`));
    } else {
      localStorage.setItem("shopping-cart", JSON.stringify(cart));
    }

    setIsLoading(false);
  }, [cart]);

  const cartValues = {
    cart: cart,
    dispatch,
    getCartTotal,
    getNumItems,
    populateCart,
    isLoading,
  };

  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
