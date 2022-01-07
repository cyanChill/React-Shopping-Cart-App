import Updates from "./Updates";
import Support from "./Support";
import Info from "./Info";
import SocialLinks from "./SocialLinks";

import classes from "./Footer.module.css";
import logo from "../../assets/images/ltt_logo.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <Updates />
      <Support />
      <Info />
      <SocialLinks />
    </div>
  );
};

export default Footer;
