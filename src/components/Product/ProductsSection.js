import ProductItem from "./ProductItem";

import classes from "./ProductsSection.module.css";

const ProductsSection = (props) => {
  const sectionClasses = `${classes.section} ${
    props.uppercase && classes.uppercase
  }`;

  return (
    <div className={sectionClasses}>
      <h1>{props.label}</h1>
      <div className={classes.products}>
        {props.products.map((p) => (
          <ProductItem
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>

      {props.action && (
        <div className={classes.actionSection}>{props.action}</div>
      )}
    </div>
  );
};

export default ProductsSection;
