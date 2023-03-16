import React from "react";
import Card from "../Card/Card";
import './temperature.css'

const Temperature = ({ weatherData }) => {
  const { current } = weatherData;

  return (
    <Card className="temperature card">
      <p id="temperature">{`${current.temp_c} °C / ${current.temp_f} °F`}</p>
      <div className="feelslike">
        <p>Se sinte ca :</p>
        <p id="feelslike">{`${current.feelslike_c} °C / ${current.feelslike_f} °F`}</p>
      </div>
    </Card>
  );
};

export default Temperature;
