import React from "react";
import './weatherDetails.css'
import { WiHumidity } from 'react-icons/wi';
import { BiWind } from 'react-icons/bi';
import { BsCloudRain } from 'react-icons/bs';
import { GiSnowing } from 'react-icons/gi';
import { GiExpandedRays } from 'react-icons/gi';





const WeatherDetails = ({weatherData}) => {

    const {current} = weatherData;
    const {day} = weatherData.forecast.forecastday[0]

    const weatherDetails = [
      {name: 'humidity', value: current.humidity, icon: <WiHumidity />, um: '%'},
      {name: 'wind', value: day.maxwind_kph, icon: <BiWind />, um: 'km/h'},
      {name: 'rain', value: day.daily_chance_of_rain, icon: <BsCloudRain/>, um: '%'},
      {name: 'snow', value: day.daily_chance_of_snow, icon: <GiSnowing/>, um: '%'},
      {name: 'uv', value: day.uv, icon: <GiExpandedRays/>, um: 'uv'},
    ]
        

  return (
  <div className="weather-details">
    {weatherDetails.map((item) => (
         <div key={item.name} className="item"> 
            {React.cloneElement(item.icon, { size: '1.5em'})}
            <p>{`${item.value} ${item.um}`}</p>
         </div>
    ))}
  </div> )
};

export default WeatherDetails;