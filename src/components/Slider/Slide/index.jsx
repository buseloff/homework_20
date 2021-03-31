import React, { useState, useEffect } from "react";
import styles from "./Slide.module.scss";

const Slide = (props) => {
  const imgObg = new Image();
  const [img, setImg] = useState(imgObg);
  const [isLoad, setIsLoad] = useState(true);

  const load = () => {
    const {
      currentSlide: { src },
    } = props;
    img.src = src;
  };
  useEffect(() => {
    const {
      currentSlide: { src },
    } = props;
    if (src !== props.currentSlide && isLoad) {
      load();
    }
  });

  return (
    <>
      {isLoad && (
        <figure
          title={props.currentSlide.title}
          style={{ height: props.height, width: props.width }}
          className={styles.imgWrapper}
        >
          <img
            src={props.currentSlide.src}
            className={styles.slideImg}
            alt="Slide_photo"
          />
          <figcaption className={styles.figCaption}>
            <h2>{props.currentSlide.title}</h2>
            <p>{props.currentSlide.description}</p>
          </figcaption>
        </figure>
      )}
    </>
  );
};
export default Slide;
