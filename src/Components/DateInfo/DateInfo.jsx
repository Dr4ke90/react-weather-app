import React from "react";
import "./dateInfo.css";

const DateInfo = ({ weatherData }) => {
  const { location } = weatherData;

  const timestamp = location.localtime;
  const date = new Date(timestamp);
  const weekday = date.toLocaleDateString("ro-RO", { weekday: "long" });
  const capitalizedDay = weekday.slice(0, 1).toUpperCase() + weekday.slice(1);

  return (
    <div className="date-info">
      <p className={weekday}>{capitalizedDay}</p>
      <p className="date">{timestamp}</p>
    </div>
  );
};

export default DateInfo;
