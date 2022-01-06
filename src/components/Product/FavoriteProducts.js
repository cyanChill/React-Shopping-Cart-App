import ProductItem from "./ProductItem";

import classes from "./FavoriteProducts.module.css";
import Products from "../../assets/product-list";

const FavoriteProducts = () => {
  const favProducts = Products.filter((p) => p.favorite);

  return (
    <div className={classes.favorites}>
      <h1>OUR FAVORITES</h1>
      <div className={classes.products}>
        {favProducts.map((p) => (
          <ProductItem
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
