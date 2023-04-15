import React from "react";
import './temperature.css'

const Temperature = ({ weatherData }) => {
  const { day } = weatherData.forecast.forecastday[0];

  const icon = day.condition.icon

  return (
    <div className="temperature">
      <img src={icon} alt="" />
      <p id="temperature">{`${day.maxtemp_c}°`}<span>{`/${day.mintemp_c}°`}</span></p>
    </div>
  );
};

export default Temperature;
