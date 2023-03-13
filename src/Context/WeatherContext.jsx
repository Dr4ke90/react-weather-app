import React, { createContext, useContext, useState, useEffect} from "react";
import { LocationContext } from "./GeolocationContext";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const {city} = useContext(LocationContext);

  const [defaultWeather, setDefaultWeather] = useState(null);
  const [customWeather, setCustomWeather] = useState(null);

  useEffect(() => {
    getDefaultWeather();
  }, []);

  const getDefaultWeather = async () => {
    const cityValue = city ? city : "Bucharest";
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=0e94552db7dd463fad2141235230503&q=${cityValue}&days=7&aqi=yes&alerts=no`
    );
    const data = await response.json();
    setDefaultWeather(data);
  };

  const getCustomWeather = async (city) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=0e94552db7dd463fad2141235230503&q=${city}&days=7&aqi=yes&alerts=no`
    );
    const data = await response.json();
    setCustomWeather(data);
  };

  return (
    <WeatherContext.Provider
      value={{
        defaultWeather,
        customWeather,
        getCustomWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
