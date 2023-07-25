import React from "react";
import { useState } from "react";
function AreaData()
{
  const[cityName,setCity]=useState("");

   function onChangeCity(event)
   {
       console.log(event.target.value);
       setCity(event.target.value);
   }

   function onClickSubmit()
   {
      
   }
   

    return(
        <div className="input-city">
             <input onChange={onChangeCity} type="text" placeholder="Enter city name" value={cityName}/>
             <button onClick={onClickSubmit}>Search</button>
        </div>
    );
    }
export default AreaData;