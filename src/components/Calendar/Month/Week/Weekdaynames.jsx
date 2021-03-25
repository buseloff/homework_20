import React from "react";
import styles from "./Week.module.scss";
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Weekdays = () => {
  const days = dayNames.map((day, key) => {
    return <div className ={styles.dayNames2} key={key}>{day}</div>;
  });
  return <div className ={styles.dayNames}>{days}</div>;
};
export default Weekdays;
