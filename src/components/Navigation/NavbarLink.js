import { Link } from "react-router-dom";

import classes from "./NavbarLink.module.css";

const NavbarLink = (props) => {
  const linkClasses = `${classes.link} ${props.className} ${
    props.muted && classes.muted
  }`;

  return (
    <Link to={props.to} className={linkClasses}>
      {props.label}
    </Link>
  );
};

export default NavbarLink;
