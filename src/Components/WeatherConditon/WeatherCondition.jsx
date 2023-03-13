import React from 'react'
import Temperature from '../Temperature/Temperature'
import './weatherCondition.css'

const WeatherCondition = ({weatherData}) => {

    const {condition} = weatherData.current

    
  return (
    <div className='weather-condition'>
        <img src={condition.icon} alt={condition.text} /> 
        <p className='text'>{condition.text}</p>
        <Temperature weatherData={weatherData} />
    </div>
  )
}

export default WeatherCondition;