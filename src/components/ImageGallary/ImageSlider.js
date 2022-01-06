/* 
  Have an "auto" prop

  Expect an array of objects
  [Maybe for the images, use the links instead]
*/

import classes from "./ImageSlider.module.css";
import testImg from "../../assets/images/banner-gallary-1-desktop.png";

const ImageSlider = (props) => {
  return (
    <div className={classes.gallary}>
      <img src={testImg} alt="test banner" />
    </div>
  );
};

export default ImageSlider;
