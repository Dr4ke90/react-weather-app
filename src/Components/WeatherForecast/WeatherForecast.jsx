import React from "react";
import Card from "../Card/Card";
import './weatherForecast.css'

function Forecast({weatherData}) {

  const forecastList = weatherData.forecast.forecastday.map((item, index) => {
    if (index === 0) return null; // skip the current weather data


    const timestamp = item.date;
    const date = new Date(timestamp);
    const weekday = date.toLocaleDateString("ro-RO", { weekday: "long" });
    const capitalizedDay = weekday.slice(0, 1).toUpperCase() + weekday.slice(1);

    const icon = item.day.condition.icon;
    const maxtemp = `${item.day.maxtemp_c} °C`;
    const humidity = `${item.day.avghumidity} %`;
    const maxWind = `${item.day.maxwind_kph} km/h`;
    
    return (
      <Card key={index} className="weather-card-container">
        <p id="weekday">{capitalizedDay}</p>
        <p className="date">{timestamp}</p>
        <img src={icon} alt="" />
        <p>{`Temp : ${maxtemp}`}</p>
        <p>{`Umiditate : ${humidity}`}</p>
        <p>{`Vant : ${maxWind}`}</p>
      </Card>
    );
  });

  return (
    <Card className="card">
      {forecastList}
    </Card>
  );
}

export default Forecast;
