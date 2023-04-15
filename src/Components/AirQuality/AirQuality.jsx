import React from "react";
import "./airQuality.css";

const AirQuality = ({ weatherData }) => {
  const { air_quality } = weatherData.current;


  const airInfo = {
    Carbon: air_quality.co,
    Azot: air_quality.no2,
    Ozon: air_quality.o3,
    Sulf: air_quality.so2,
    'Part-PM2.5': air_quality.pm2_5,
    'Part-PM10': air_quality.pm10,
  };

  return (
    <div className="air-info">
      {Object.entries(airInfo).map(([key, value], index) => (
        <p key={key}>{`${key} : ${value.toFixed(6)}`}</p>
      ))}
      <div className="air-quality"></div>
    </div>
  );
};

export default AirQuality;
