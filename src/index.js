import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import CartProvider from "./context/shopping-ctx";
import FirebaseContextProvider from "./context/firebase-ctx";

ReactDOM.render(
  <FirebaseContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FirebaseContextProvider>,
  document.getElementById("root")
);
