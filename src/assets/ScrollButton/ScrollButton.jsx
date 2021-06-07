import React from "react";
import classes from "./ScrollButton.module.css";

const ScrollButton = ({ direction, element, step, speed, distance }) => {
  const handleClick = (element, step, speed, distance) => {
    let scrollAmount = 0;

    const slide = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slide);
      }
    }, speed);
  };

  return (
    <button
      className={
        direction === "left"
          ? classes.ScrollButtonLeft
          : classes.ScrollButtonRight
      }
      onClick={() => {
        handleClick(element, step, speed, distance);
      }}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};

export default ScrollButton;
