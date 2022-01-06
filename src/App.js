import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/Product";
import Products from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Navigate replace to="/collections" />}
        />
        <Route path="/products/:pid" element={<Product />} />

        <Route path="/collections" element={<p>Collections</p>} />
        <Route path="/collections/:cid" element={<p>Specific Collection</p>} />

        <Route path="/cart" element={<ShoppingCart />} />

        <Route
          path="*"
          element={<p>404 The page you were looking for cannot be found.</p>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
