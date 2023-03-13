import { WeatherContext } from "../../Context/WeatherContext";
import DateInfo from "../DateInfo/DateInfo";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import WeatherCondition from "../WeatherConditon/WeatherCondition";
import AirQuality from "../AirQuality/AirQuality";
import Forecast from "../WeatherForecast/WeatherForecast";
import { useContext } from "react";
import "./weatherDisplay.css";

const WeatherDisplay = () => {

  const { defaultWeather } = useContext(WeatherContext);
  const { customWeather } = useContext(WeatherContext);

  const weatherData = customWeather ? customWeather : defaultWeather;

  if (!weatherData) return null;

  return (
    <div className="weather-display">
      <div className="weekday">
        <DateInfo weatherData={weatherData} />
      </div>
      <div className="info">
        <WeatherDetails weatherData={weatherData} />
        <WeatherCondition weatherData={weatherData} />
        <AirQuality weatherData={weatherData} />
      </div>
      <Forecast weatherData={weatherData} />
    </div>
  );
};

export default WeatherDisplay;
