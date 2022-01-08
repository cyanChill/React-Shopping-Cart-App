import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import LoadingSpinner from "../components/UI/LoadingSpiner";
import ProductItem from "../components/Product/ProductItem";

import classes from "./Collection.module.css";
import { CategoryList, ProductsList } from "../assets/product-list";

const Collection = (props) => {
  const { cid } = useParams();
  const [validCategory, setValidCategory] = useState(
    !!CategoryList.find((c) => c === cid)
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (validCategory) {
      if (cid === "all") {
        setProducts(ProductsList);
      } else if (cid === "favorites") {
        setProducts(ProductsList.filter((p) => p.favorite));
      } else {
        setProducts(ProductsList.filter((p) => p.type.find((c) => c === cid)));
      }
    }

    setLoading(false);
  }, [validCategory, cid]);

  if (!validCategory) {
    return <ErrorPage />;
  }

  return (
    <div className={classes.page}>
      <h1>{cid}</h1>
      {loading && <LoadingSpinner />}
      {!loading && products && (
        <div className={classes["products-container"]}>
          {products.map((p) => (
            <ProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.images[0].image}
              price={p.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
