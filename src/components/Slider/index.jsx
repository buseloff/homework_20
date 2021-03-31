import React, { useState } from "react";
import Slide from "./Slide";
import ControlSlider from "./ControlSlider";

const Slider = (props) => {
  const { widthInitial, heightInitial } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(widthInitial);
  const [height, setHeight] = useState(heightInitial);

  const nextIndex = () => {
    const { slides } = props;
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevIndex = () => {
    const { slides } = props;
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const fullscreenMode = (isFullScreen) => {
    const { widthInitial, heightInitial } = props;
    if (isFullScreen) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    if (!isFullScreen) {
      setWidth(widthInitial);
      setHeight(heightInitial);
    }
  };

  return (
    <div>
      <Slide
        currentSlide={props.slides[currentIndex]}
        width={width}
        height={height}
      />
      <ControlSlider
        next={nextIndex}
        prev={prevIndex}
        fullscreenMode={fullscreenMode}
      />
    </div>
  );
};

export default Slider;
