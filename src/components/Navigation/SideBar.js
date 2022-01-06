import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../UI/Backdrop";
import SlideAnimLink from "../UI/SlideAnimLink";

import classes from "./SideBar.module.css";

const Sidebar = (props) => {
  const content = (
    <>
      <CSSTransition
        in={props.show}
        timeout={250}
        classNames={{
          enterDone: classes["fade-enter-active"],
          exitActive: classes["fade-exit"],
        }}
        mountOnEnter
        unmountOnExit
      >
        <Backdrop onClick={props.onClick} />
      </CSSTransition>

      <CSSTransition
        in={props.show}
        timeout={250}
        classNames={{
          enterActive: classes["slide-enter"],
          enterDone: classes["slide-enter-active"],
          exitActive: classes["slide-exit"],
          exitDone: classes["slide-exit-active"],
        }}
        mountOnEnter
        unmountOnExit
      >
        <aside className={classes["side-drawer"]} onClick={props.onClick}>
          <div className={classes["primary-links"]}>
            {/* Main Links */}
            <SlideAnimLink to="/" label="HOME" />
            <SlideAnimLink to="/collections/all" label="ALL PRODUCTS" />
            <SlideAnimLink to="/collections/clothing" label="CLOTHING" />
            <SlideAnimLink to="/collections/gear" label="GEAR" />
            <SlideAnimLink to="/collection/gift-cards" label="GIFT CARDS" />
          </div>

          <div className={classes["secondary-links"]}>
            {/* Helper Links (ie: shipping, customs, etc.) */}
            <SlideAnimLink to="/" label="Shipping Policy" muted />
            <SlideAnimLink to="/" label="Customs & Duty Fees" muted />
            <SlideAnimLink to="/" label="Return Policy" muted />
            <SlideAnimLink to="/" label="Terms and Conditions" muted />
            <SlideAnimLink to="/" label="Privacy Policy" muted />
            <SlideAnimLink to="/" label="Account" muted />
          </div>
        </aside>
      </CSSTransition>
    </>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-portal")
  );
};

export default Sidebar;
