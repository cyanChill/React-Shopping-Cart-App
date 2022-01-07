import SlideAnimLink from "../UI/SlideAnimLink";

import classes from "./Footer.module.css";

const Support = () => {
  return (
    <div className={classes["footer-section"]}>
      <h3>Support</h3>
      <SlideAnimLink to="/" label="support@lttstore.com" muted />
    </div>
  );
};

export default Support;
