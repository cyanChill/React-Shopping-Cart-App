/* 
  Have an "auto" prop

  Have a prop (maybe "imageNav") to show the dots to go to a specific image
    - Have 3 types of values:
       1. "Hidden"
       2. "Horizontal" // Default
       3. "Vertical"

  Expect an array of objects
  [Maybe for the images, use the links instead]

  Have a speed property if we select the "auto" prop
*/
import { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

import Button from "../FormElements/Button";
import GallaryNavDot from "./GallaryNavDot";

import classes from "./ImageSlider.module.css";
import bannerList from "../../assets/banner-list";

const ImageSlider = (props) => {
  const navigate = useNavigate();
  const { auto, images, slideSpeed, buyBtn, gallaryCtrl } = props;
  /* 
    "gallaryCtrl" determines where we put the navigation controls for the gallary.
    There are 2 possible values [not putting this value as a property will result
    in the default which is a horizontal navigation bar]
      1. "hidden" - Hide the navigation controls
      2. "vertical" - Put the navigation controls on the left side of the gallary
  */

  const [currIdx, setCurrIdx] = useState(0);
  const [show, setShow] = useState(false);
  const autoSlideRef = useRef();
  const transitionAnimRef = useRef();

  const nextImg = useCallback(() => {
    setCurrIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  }, [images.length]);

  const prevImg = useCallback(() => {
    setCurrIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  }, [images.length]);

  const transitionAnim = useCallback(() => {
    setShow(true);
    const autoInterval = slideSpeed || 7500;
    transitionAnimRef.current = setTimeout(() => {
      setShow(false);
    }, autoInterval - 400);
  }, [slideSpeed]);

  useEffect(() => {
    // Component will rerender at each completed timeout
    if (auto) {
      transitionAnim();

      const autoInterval = slideSpeed || 7500;
      autoSlideRef.current = setTimeout(() => {
        nextImg();
      }, autoInterval);
    }

    return () => {
      clearTimeout(autoSlideRef.current);
    };
  }, [currIdx, nextImg, slideSpeed, auto, transitionAnim]);

  return (
    <div
      className={`${classes["gallary-container"]} ${
        gallaryCtrl === "vertical" && classes.vertical
      }`}
    >
      <div className={classes.gallary}>
        <CSSTransition
          in={show}
          timeout={400}
          classNames={{
            enterActive: classes["fade-enter"],
            enterDone: classes["fade-enter-active"],
            exitActive: classes["fade-exit"],
            exitDone: classes["fade-exit-active"],
          }}
          mountOnEnter
          unmountOnExit
        >
          <img src={bannerList[currIdx].desktopImg} alt="test banner" />
        </CSSTransition>

        {buyBtn && (
          <CSSTransition
            in={show}
            timeout={400}
            classNames={{
              enterActive: classes["fade-btn-enter"],
              enterDone: classes["fade-btn-enter-active"],
              exitActive: classes["fade-btn-exit"],
              exitDone: classes["fade-btn-exit-active"],
            }}
            mountOnEnter
            unmountOnExit
          >
            <Button
              className={classes["link-btn"]}
              onClick={() => navigate(`/products/${bannerList[currIdx].id}`)}
            >
              Buy Now
            </Button>
          </CSSTransition>
        )}
      </div>

      {/* Navigation Buttons */}
      {gallaryCtrl !== "hidden" && (
        <div
          className={`${classes["gallary-nav"]} ${
            gallaryCtrl === "vertical" && classes.vertical
          }`}
        >
          {images.map((prod, idx) => (
            <GallaryNavDot
              key={prod.id}
              onClick={() => {
                clearTimeout(transitionAnimRef.current);
                clearTimeout(autoSlideRef.current);
                setCurrIdx(idx);
              }}
              active={currIdx === idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
