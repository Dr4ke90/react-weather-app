import React, { useContext, useState } from 'react';
import { WeatherContext } from '../../Context/WeatherContext';
import './weatherForm.css'

function WeatherForm() {
  const { getCustomWeather} = useContext(WeatherContext);
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    getCustomWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit">Vezi vremea</button>
    </form>
  );
}

export default WeatherForm;
