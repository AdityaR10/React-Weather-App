import React from "react"; 
import FetchWeatherData from "./Wdata";

function WeatherInfo()
{
   const apiKey= process.env.REACT_APP_WEATHER_API
   return (
      <div className="flex-grid">
          <div className="weather-info row"> 
        <div className="col">  <FetchWeatherData apiKey={apiKey}/></div> 
        <div className="col low">  <FetchWeatherData apiKey={apiKey}/></div> 
        <div className="col low">  <FetchWeatherData apiKey={apiKey}/></div> 
        </div>
      </div>
       
   );
}

export default WeatherInfo;