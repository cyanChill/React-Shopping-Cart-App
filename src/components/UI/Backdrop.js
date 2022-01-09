import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const backdropClasses = `${classes.backdrop} ${props.dark && classes.dark}`;

  return ReactDOM.createPortal(
    <div className={backdropClasses} onClick={props.onClick}></div>,
    document.getElementById("backdrop-portal")
  );
};

export default Backdrop;
