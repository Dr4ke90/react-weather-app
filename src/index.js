import React from "react";
import ReactDOM from "react-dom/client";
import { WeatherProvider } from "./Context/WeatherContext";
import "./index.css";
import App from "./App";
import {LocationProvider } from './Context/GeolocationContext'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocationProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </LocationProvider>
  </React.StrictMode>
);
