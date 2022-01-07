import SlideAnimLink from "../UI/SlideAnimLink";

import classes from "./Footer.module.css";

const Info = () => {
  return (
    <div className={classes["footer-section"]}>
      <h3>Info</h3>
      <SlideAnimLink to="/" label="Shipping Policy" muted />
      <SlideAnimLink to="/" label="Customs & Duty Fees" muted />
      <SlideAnimLink to="/" label="Return Policy" muted />
      <SlideAnimLink to="/" label="Terms and Conditions" muted />
      <SlideAnimLink to="/" label="Privacy Policy" muted />
    </div>
  );
};

export default Info;
