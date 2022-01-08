import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/Product";
import Collection from "./pages/Collection";
import Collections from "./pages/Collections";
import ErrorPage from "./pages/ErrorPage";
import ShippingPolicy from "./pages/legal/ShippingPolicy";
import CustomsDutiesFees from "./pages/legal/CustomsDutiesFees";
import ReturnPolicy from "./pages/legal/ReturnPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Account from "./pages/Account";

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

          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/customs-duty-fees" element={<CustomsDutiesFees />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/account" element={<Account />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
