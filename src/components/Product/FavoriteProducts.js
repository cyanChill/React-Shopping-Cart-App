import ProductsSection from "./ProductsSection";

import Products from "../../assets/product-list";

const FavoriteProducts = () => {
  const favProducts = Products.filter((p) => p.favorite).map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0] ? p.images[0].image : "",
    favorite: p.favorite,
  }));

  return (
    <ProductsSection label="Our Favorites" products={favProducts} uppercase />
  );
};

export default FavoriteProducts;
