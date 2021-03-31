import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiPlay,
  mdiPause,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiSkipNext,
  mdiSkipPrevious,
} from "@mdi/js";
import styles from "./ControlSlider.module.scss";

const ControlSlider = (props) => {
  const [delay, setDelay] = useState(1000);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  let timeoutId = null;

  const playHandler = () => {
    setIsPlay(!isPlay);
  };

  const delayHandler = ({ target: { value } }) => {
    setDelay(value);
  };

  const fullscreenMode = () => {
    const { fullscreenMode } = props;
    setIsFullScreen(!isFullScreen);
    fullscreenMode(isFullScreen);
  };

  useEffect(() => {
    const { next } = props;
    clearTimeout(timeoutId);
    timeoutId = null;
    if (isPlay) {
      timeoutId = setTimeout(next, delay);
    }
  });

  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          type="range"
          value={delay}
          min={100}
          max={2000}
          onChange={delayHandler}
        />
        <div>{`Speed of slides = ${delay} ms`}</div>
      </div>
      <div className={styles.controlWrapper}>
        <Icon onClick={props.prev} path={mdiSkipPrevious} size={2} />
        <Icon
          onClick={playHandler}
          path={isPlay ? mdiPause : mdiPlay}
          size={2}
        />
        <Icon onClick={props.next} path={mdiSkipNext} size={2} />
        <Icon
          onClick={fullscreenMode}
          path={!isFullScreen ? mdiFullscreenExit : mdiFullscreen}
          size={2}
        />
      </div>
    </div>
  );
};

export default ControlSlider;

/*
state: delay, isFullScreen, isPlay
props: next, prev, fullscreenMode
*/
