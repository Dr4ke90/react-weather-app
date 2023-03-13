import React from "react";
import './weatherDetails.css'

const WeatherDetails = ({weatherData}) => {

    const {current} = weatherData;
    const {day} = weatherData.forecast.forecastday[0]

    const weatherDetails = {
        'Temp Max :': ` ${day.maxtemp_c} °C / ${day.maxtemp_f} °F`,
        'Temp Min :': ` ${day.mintemp_c} °C / ${day.mintemp_f} °F`,
        'Umiditate :' : ` ${current.humidity} %`,
        'Vant max :' : ` ${day.maxwind_kph} km/h / ${day.maxwind_mph} m/h`,
        'Sanse plaie :': ` ${day.daily_chance_of_rain} %`,
        'Sanse nins :': ` ${day.daily_chance_of_snow} %`,
        'Raze UV :': ` ${day.uv}`
    }

  return (
  <div className="weather-details">
    <div>
      <p className="title">Detalii</p>
    </div>
    {Object.entries(weatherDetails).map(([key, value],index) => (
        <p key={index}>{key + value}</p>
    ))}
  </div> )
};

export default WeatherDetails;