import { useEffect, useState, useContext, useCallback } from "react";
import { FaShoppingCart, FaBars, FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { CartContext } from "../../context/shopping-ctx";

import Sidebar from "./SideBar";

import logo from "../../assets/images/ltt_logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { cart, getNumItems } = useContext(CartContext);
  const [blurNav, setBlurNav] = useState(false);
  const [show, setShow] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const showSideBar = () => setShow(true);
  const hideSideBar = () => setShow(false);

  const scrollListenerHandler = useCallback(() => {
    if (window.scrollY === 0) {
      setBlurNav(false);
    } else {
      setBlurNav(true);
    }
  }, []);

  /* Blur navbar (give white background) by default if not on the home page */
  useEffect(() => {
    if (pathname === "/") {
      setBlurNav(false);
      window.addEventListener("scroll", scrollListenerHandler);
    } else {
      window.removeEventListener("scroll", scrollListenerHandler);
      setBlurNav(true);
    }

    return () => {
      window.removeEventListener("scroll", scrollListenerHandler);
    };
  }, [pathname, scrollListenerHandler]);

  useEffect(() => {
    if (show) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "auto";
    }
  }, [show]);

  /* Update the number next to the shopping cart*/
  useEffect(() => {
    setCartQuantity(getNumItems());
  }, [cart, getNumItems]);

  return (
    <>
      <Sidebar show={show} onClick={hideSideBar} />

      <div className={`${classes.navbar} ${blurNav && classes.blur}`}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes[`nav-actions`]}>
          <FaUserCircle onClick={() => navigate("/account")} />
          <div className={classes.cart}>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            {cartQuantity > 0 ? <span>{cartQuantity}</span> : null}
          </div>
          <FaBars onClick={showSideBar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
