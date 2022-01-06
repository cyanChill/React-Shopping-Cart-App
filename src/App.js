import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
