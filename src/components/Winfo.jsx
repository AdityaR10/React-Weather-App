import React from "react"; 
import FetchWeatherData from "./Wdata";

function WeatherInfo()
{
   return (
      <div className="flex-grid">
          <div className="weather-info row"> 
        <div className="col">  <FetchWeatherData/></div> 
        <div className="col low">  <FetchWeatherData/></div> 
        <div className="col low">  <FetchWeatherData/></div> 
        </div>
      </div>
       
   );
}

export default WeatherInfo;