import React from "react";
import PropTypes from "prop-types";
import styles from "../Month.module.scss";
import { startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import CDate from "./CDate";

const getDaysOfWeek = ({ weekDate, date, currentDate }) =>
  eachDayOfInterval({
    start: startOfWeek(weekDate, { weekStartsOn: 1 }),
    end: endOfWeek(weekDate, { weekStartsOn: 1 }),
  }).map((dayDate) => (
    <CDate
      key={dayDate}
      dayDate={dayDate}
      date={date}
      currentDate={currentDate}
    />
  ));

const Week = (props) => <ul className={styles.row}>{getDaysOfWeek(props)}</ul>;

Week.propTypes = {
  weekDate: PropTypes.instanceOf(Date).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date),
};

Week.defaultProps = {
  currentDate: new Date(),
};

export default Week;
