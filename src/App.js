import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/Product";
import Collection from "./components/Collection/Collection";
import Collections from "./pages/Collections";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Navigate replace to="/collections" />}
          />
          <Route path="/products/:pid" element={<Product />} />

          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:cid" element={<Collection />} />

          <Route path="/cart" element={<ShoppingCart />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
