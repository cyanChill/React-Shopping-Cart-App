import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import CartProvider from "./context/shopping-ctx";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
