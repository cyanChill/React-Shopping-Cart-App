import classes from "./Footer.module.css";
import { legalLinks } from "../../assets/link-lists";

const Info = () => {
  return (
    <div className={classes["footer-section"]}>
      <h3>Info</h3>
      {legalLinks}
    </div>
  );
};

export default Info;
