import { useNavigate } from "react-router-dom";

import ProductsSection from "./ProductsSection";
import Button from "../FormElements/Button";

import Products from "../../assets/product-list";

const AllProducts = () => {
  const navigate = useNavigate();
  const selectedProducts = Products.slice(0, 8);

  const actions = (
    <Button onClick={() => navigate("/collections/all")}>
      View All Products
    </Button>
  );

  return (
    <ProductsSection
      label="All Products"
      products={selectedProducts}
      action={actions}
      uppercase
    />
  );
};

export default AllProducts;
