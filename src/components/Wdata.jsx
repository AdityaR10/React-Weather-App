    
    import React ,{useEffect,useState} from "react";
    import Clock from "./clock";
     

    function FetchWeatherData(){

      const [temper,setTemp]=useState(null); 

      const [heat,setHeat]=useState(null); 
      const [skyStat,setStat]=useState(null);  
      console.log(temper);

     const appidVAr="55a767a3561b51291f1bd617d15dc0fa";
          const unit="metric";
          const area="Indore"
          const url="https://api.openweathermap.org/data/2.5/weather?q="+area+"&appid="+appidVAr+"&units="+unit; 
          const currWeather=fetch(url); 
          useEffect(()=>{
            Promise.all([currWeather])
            .then(
              async (response) =>
              {
                const weatherRes=await response[0].json();
                setTemp(weatherRes);
                setHeat(weatherRes.main.temp); 
                setStat(weatherRes.weather[0].description); 
              }
            )
            .catch((err)=> console.log(err));
          },[]);
         
        return(
            <div className="bgSky column">
            <div className="display-date">
              <Clock/>
            </div>
            <div className="weather-data data-container">
                <div className="w-temp">{heat}°C</div>
                 <div className="w-temp" >{skyStat}</div> 
                </div>
            </div>
        );
        }

        export default FetchWeatherData;