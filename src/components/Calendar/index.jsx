import React from "react";
import Day from "./Day";
import Month from "./Month";
import Weekdays from "./Month/Week/Weekdaynames";
import styles from "./Calendar.module.scss";

const Calendar = ({ currentDate }) => {
  return (
    <article className={styles.calendar}>
      <Day currentDate={currentDate} />
      <Month date={currentDate} currentDate={currentDate} />
      <Weekdays />
    </article>
  );
};
export default Calendar;
