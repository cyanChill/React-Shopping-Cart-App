import classes from "./Button.module.css";

const Button = (props) => {
  const btnClasses = `${classes.btn} ${props.inverse && classes.inverse}`;


  return (
    <button className={btnClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
