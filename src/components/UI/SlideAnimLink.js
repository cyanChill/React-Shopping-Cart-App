import { Link } from "react-router-dom";

import classes from "./SlideAnimLink.module.css";

const SlideAnimLink = (props) => {
  const linkClasses = `${classes.link} ${props.className} ${
    props.muted && classes.muted
  }`;

  return (
    <Link to={props.to} className={linkClasses}>
      {props.label}
    </Link>
  );
};

export default SlideAnimLink;
