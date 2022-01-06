import ProductsSection from "./ProductsSection";

import Products from "../../assets/product-list";

const FavoriteProducts = () => {
  const favProducts = Products.filter((p) => p.favorite);

  return (
    <ProductsSection label="Our Favorites" products={favProducts} uppercase />
  );
};

export default FavoriteProducts;
