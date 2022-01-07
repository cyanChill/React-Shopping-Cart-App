import Button from "../FormElements/Button";
import FormInput from "../FormElements/FormInput";

import classes from "./Footer.module.css";

const Updates = () => {
  return (
    <div className={classes["footer-section"]}>
      <h3>Updates</h3>
      <p>Sign up for product teasers, deals, and more</p>
      <div className={classes["email-service"]}>
        <FormInput placeholder="Enter your email address" block />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default Updates;
