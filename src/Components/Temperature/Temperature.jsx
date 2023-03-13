import React from "react";
import './temperature.css'

const Temperature = ({ weatherData }) => {
  const { current } = weatherData;

  return (
    <div className="temperature">
      <p id="temperature">{`${current.temp_c} °C / ${current.temp_f} °F`}</p>
      <div className="feelslike">
        <p>Se sinte ca :</p>
        <p id="feelslike">{`${current.feelslike_c} °C / ${current.feelslike_f} °F`}</p>
      </div>
    </div>
  );
};

export default Temperature;
