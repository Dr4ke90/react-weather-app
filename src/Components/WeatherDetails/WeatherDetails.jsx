import React from "react";
import Card from "../Card/Card";
import './weatherDetails.css'

const WeatherDetails = ({weatherData}) => {

    const {current} = weatherData;
    const {day} = weatherData.forecast.forecastday[0]

    const weatherDetails = {
        Temp_Max : `: ${day.maxtemp_c} °C / ${day.maxtemp_f} °F`,
        Temp_min : `: ${day.mintemp_c} °C / ${day.mintemp_f} °F`,
        Umiditate : `: ${current.humidity} %`,
        Vant : `: ${day.maxwind_kph} km/h / ${day.maxwind_mph} m/h`,
        Ploaie : `: ${day.daily_chance_of_rain} %`,
        Ninsoare : `: ${day.daily_chance_of_snow} %`,
        Raze_UV : `: ${day.uv}`
    }

  return (
  <Card className="weather-details card">
    <div>
      <p className="title">Detalii</p>
    </div>
    {Object.entries(weatherDetails).map(([key, value]) => (
        <p key={key}>{key + value}</p>
    ))}
  </Card> )
};

export default WeatherDetails;