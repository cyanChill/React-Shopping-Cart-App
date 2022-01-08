import { useState, useEffect } from "react";

import classes from "./InteractiveQuantity.module.css";

const InteractiveQuantity = (props) => {
  const { quantity, onIncrease, onDecrease, onSet } = props;
  const [input, setInput] = useState(quantity);

  const handleChange = () => {
    if (isNaN(input) || !input) {
      setInput(quantity);
    } else {
      onSet(input);
    }
  };

  useEffect(() => {
    setInput(quantity);
  }, [quantity]);

  return (
    <div className={classes.container}>
      <button onClick={onDecrease}>-</button>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={handleChange}
      />
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default InteractiveQuantity;
