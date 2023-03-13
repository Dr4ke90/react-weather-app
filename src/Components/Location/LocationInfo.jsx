import React from 'react'
import './locationInfo.css'

 const LocationInfo = ({weatherData}) => {

  const {location} = weatherData

  return (
    <div className='location-info'>
      <p>Vremea In : <span>{` ${location.country} / ${location.region}`}</span></p>
    </div>
  )
}


export default LocationInfo