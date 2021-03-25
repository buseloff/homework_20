import React from "react";
import PropTypes from "prop-types";
import styles from "./CDate.module.css";
import { format, isSameMonth, isSameDay } from "date-fns";
import classNames from "classnames";

const CDate = ({ dayDate, date, currentDate }) => {
  const isCurrent =
    isSameMonth(dayDate, currentDate) && isSameDay(dayDate, currentDate);
  const classNameItem = classNames(styles.cell, {
    [styles.currentDay]: isCurrent,
    [styles.otherMonth]: !isSameMonth(dayDate, date),
  });
  return <li className={classNameItem}>{format(dayDate, "d")}</li>;
};

CDate.propTypes = {
  dayDate: PropTypes.instanceOf(Date).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date),
};

CDate.defaultProps = {
  currentDate: new Date(),
};

export default CDate;
