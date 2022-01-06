/* 
  - Logo on left side of navbar
  - 2 Buttons on right side of navbar:
      1. Shopping Cart
      2. Navigation Sidebar Clicker
*/
import { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Sidebar from "./SideBar";

import logo from "../../assets/images/ltt_logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showSideBar = () => setShow(true);
  const hideSideBar = () => setShow(false);

  /*
    Need check to see if we scrolled on the page; if we have, need to give
    the navebar a "active class" (ie: make the background not transparent)
  */

  return (
    <>
      <Sidebar show={show} onClick={hideSideBar} />

      <div className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes[`nav-actions`]}>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <FaBars onClick={showSideBar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
