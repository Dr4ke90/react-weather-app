import React, { useState, createContext, useLayoutEffect } from "react";
import axios from "axios";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [city, setCity] = useState("");

  useLayoutEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCity);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    const getCity = async (position) => {
      const apiKey = "56a6e231354b421cbbc7a51dbdebec92";
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;
      try {
        const response = await axios.get(url);
        const city = response.data.features[0].properties.city
        setCity(city);
      } catch (error) {
        console.error(error);
      }
    };

    getLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ city }}>
      {children}
    </LocationContext.Provider>
  );
}