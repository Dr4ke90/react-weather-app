import React from "react";
import Card from "../Card/Card";
import "./weatherForecast.css";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";

function Forecast({ weatherData }) {
  const forecastList = weatherData.forecast.forecastday.map((item, index) => {
    if (index === 0) return null; // skip the current weather data

    const timestamp = item.date;
    const date = new Date(timestamp);
    const weekday = date.toLocaleDateString("ro-RO", { weekday: "long" });
    const capitalizedDay = weekday.slice(0, 1).toUpperCase() + weekday.slice(1);

    const icon = item.day.condition.icon;
    const condition = item.day.condition.text;
    const maxtemp = item.day.maxtemp_c;
    const mintemp = item.day.mintemp_c;
    const humidity = item.day.avghumidity;
    const maxWind = item.day.maxwind_kph;

    return (
      <Card key={index} className="weather-card-container">
        <div className="date-wrapper">
          <p id="weekday">{capitalizedDay}</p>
          <p className="date">{timestamp}</p>
        </div>
        <img src={icon} alt="" />
        <p className="temp">
          {`${maxtemp}°`}
          <span>{`/${mintemp}°`}</span>{" "}
        </p>
        <h3>{condition}</h3>
        <div className="details">
          <div className="item">
            <WiHumidity size={'1.5em'}/>
            <p>{`${humidity} %`}</p>
          </div>
          <div className="item">
            <BiWind size={'1.5em'}/>
            <p>{`${maxWind} km/h`}</p>
          </div>
        </div>
      </Card>
    );
  });

  return <Card className="card">{forecastList}</Card>;
}

export default Forecast;
