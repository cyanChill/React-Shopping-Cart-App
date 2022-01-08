import FormInput from "../components/FormElements/FormInput";
import Button from "../components/FormElements/Button";

import classes from "./Account.module.css";

const Account = () => {
  return (
    <div className={classes.page}>
      <div className={classes.wrapper}>
        <h2>Login</h2>
        <p>Please enter your e-mail and password:</p>
        <FormInput placeholder="Email" block />
        <FormInput type="password" placeholder="Password" block />
        <Button className={classes["btn-override"]}>Login</Button>
        <p>
          Don't have an account?{" "}
          <span className={classes["fake-link"]}>Create one</span>
        </p>
      </div>
    </div>
  );
};

export default Account;
