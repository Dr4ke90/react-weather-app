import { WeatherContext } from "../../Context/WeatherContext";
import DateInfo from "../DateInfo/DateInfo";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import Card from "../Card/Card";
import AirQuality from "../AirQuality/AirQuality";
import Forecast from "../WeatherForecast/WeatherForecast";
import { useContext } from "react";
import "./weatherDisplay.css";
import Temperature from "../Temperature/Temperature";

const WeatherDisplay = () => {
  const { defaultWeather } = useContext(WeatherContext);
  const { customWeather } = useContext(WeatherContext);

  const weatherData = customWeather ? customWeather : defaultWeather;

  if (!weatherData) return null;

  return (
    <div className="weather-display">
      <Card className="wraper ">
        <DateInfo weatherData={weatherData} />
        <div className="info-wrapper">
          <WeatherDetails weatherData={weatherData} />
          <Temperature weatherData={weatherData} />
          <AirQuality weatherData={weatherData} />
        </div>
      </Card>
      <div className="forecast">
        <Forecast weatherData={weatherData} />
      </div>
    </div>
  );
};

export default WeatherDisplay;
