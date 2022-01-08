import { useNavigate } from "react-router-dom";

import Button from "../components/FormElements/Button";

import classes from "./Collections.module.css";
import CollectionList from "../assets/collection-list";

const Collections = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.page}>
      <h1>All Collections</h1>

      <div className={classes.collections}>
        {CollectionList.map((c) => (
          <div key={c.id} className={classes.widget}>
            <img src={c.image} alt={c.name} />

            <div className={classes.overlay}>
              <h3>{c.name}</h3>
              <Button
                onClick={() => navigate(`/collections/${c.id}`)}
                variant="white"
                className={classes['btn-hover']}
              >
                View Product
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
