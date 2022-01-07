import classes from "./GallaryNavDot.module.css";

const GallaryNavDot = (props) => {
  const dotClasses = `${classes.dot} ${props.active && classes.active}`;

  return <div className={dotClasses} onClick={props.onClick}></div>;
};

export default GallaryNavDot;
