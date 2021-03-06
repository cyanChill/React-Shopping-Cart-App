import { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

import Button from "../FormElements/Button";
import GallaryNavDot from "./GallaryNavDot";

import classes from "./ImageSlider.module.css";

/* 
  "images" is an array of objects where the objects are of the form:
    {
      id: "...",
      image: "..."
    }
*/

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

  useEffect(() => {
    // Component will rerender at each completed timeout
    if (auto) {
      setShow(true);
      const autoInterval = slideSpeed || 7500;

      transitionAnimRef.current = setTimeout(() => {
        setShow(false);
      }, autoInterval - 250);

      autoSlideRef.current = setTimeout(() => {
        nextImg();
      }, autoInterval);
    }

    return () => {
      clearTimeout(transitionAnimRef.current);
      clearTimeout(autoSlideRef.current);
    };
  }, [currIdx, nextImg, slideSpeed, auto]);

  useEffect(() => {
    if (!auto) {
      setShow((prevShow) => !prevShow);
    }
  }, [currIdx, auto]);

  return (
    <div
      className={`${classes["gallary-container"]} ${
        gallaryCtrl === "vertical" && classes.vertical
      }`}
    >
      <div className={classes.gallary}>
        <div className={classes["img-container"]}>
          <CSSTransition
            in={show}
            timeout={250}
            classNames={{
              enterActive: classes["fade-enter"],
              enterDone: classes["fade-enter-active"],
              exitActive: classes["fade-exit"],
              exitDone: classes["fade-exit-active"],
            }}
            mountOnEnter
            unmountOnExit
          >
            <img src={images[currIdx].image} alt={images[currIdx].id} />
          </CSSTransition>

          <div
            className={classes.prev}
            onClick={() => {
              clearTimeout(transitionAnimRef.current);
              clearTimeout(autoSlideRef.current);
              setShow(false);
              prevImg();
            }}
          />
          <div
            className={classes.next}
            onClick={() => {
              clearTimeout(transitionAnimRef.current);
              clearTimeout(autoSlideRef.current);
              setShow(false);
              nextImg();
            }}
          />
        </div>

        {buyBtn && (
          <CSSTransition
            in={show}
            timeout={250}
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
              onClick={() => navigate(`/products/${images[currIdx].id}`)}
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
                if (currIdx !== idx) {
                  clearTimeout(transitionAnimRef.current);
                  clearTimeout(autoSlideRef.current);
                  setShow(false);
                  setCurrIdx(idx);
                }
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
