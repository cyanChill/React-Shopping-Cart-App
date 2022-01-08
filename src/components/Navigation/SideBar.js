import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../UI/Backdrop";
import SlideAnimLink from "../UI/SlideAnimLink";

import classes from "./SideBar.module.css";
import { legalLinks, mainNavLinks } from "../../assets/link-lists";

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
          <div className={classes["primary-links"]}>{mainNavLinks}</div>

          <div className={classes["secondary-links"]}>
            {legalLinks}
            <SlideAnimLink to="/account" label="Account" muted />
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
