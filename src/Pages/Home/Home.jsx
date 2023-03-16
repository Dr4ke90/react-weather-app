import React, { useContext, useEffect } from "react";
import WeatherDisplay from '../../Components/WeatherDisplay/WeatherDisplay'
import { WeatherContext } from '../../Context/WeatherContext'
import { LocationContext } from '../../Context/GeolocationContext';

const Home = () => {
    const {getDefaultWeather} = useContext(WeatherContext)
    const {getLocation} = useContext(LocationContext)
   
    useEffect(() => {
      getLocation();
      getDefaultWeather();
    }, []);
  
    return (
      <div className="home">
        <WeatherDisplay />
      </div>
    );
}

export default Home;