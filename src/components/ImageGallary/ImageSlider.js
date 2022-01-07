/* 
  Have an "auto" prop

  Expect an array of objects
  [Maybe for the images, use the links instead]
*/

import classes from "./ImageSlider.module.css";
import bannerList from "../../assets/banner-list";

const ImageSlider = (props) => {
  return (
    <div className={classes.gallary}>
      <img src={bannerList[0].desktopImg} alt="test banner" />
    </div>
  );
};

export default ImageSlider;
