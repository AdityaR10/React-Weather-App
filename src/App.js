import logo from './logo.svg';
import './App.css';
import Header from './components/Wheader';
import Footer from './components/Wfooter';
import WeatherInfo from './components/Winfo'; 
import FetchWeatherData from './components/Wdata';
import { useEffect, useState,axios } from 'react';  
import ColorSchemesExample from './components/Nav';
import AreaData from './components/AreaWiseData';
function App() {

  return (

    
    <div className="weather-app">
      
    <Header/> 
    <AreaData/>
    <WeatherInfo/> 
     
    {/* <Footer/> */}

   </div>
  );
}

export default App;
