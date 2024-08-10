import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { SunMedium } from 'lucide-react';
import { CloudRain } from 'lucide-react';

import { Search } from 'lucide-react';
export default function Weather() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState(null);
    const fetchWeather=async()=>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=59db6b80c4735a40614797e878fde556&units=metric`);
            setWeather(response.data);
          }catch (error) {
            console.error("error", error);
            alert('city is not avaliable')
           }
    };
    const handleSearch = () => {
        if (input) {
            fetchWeather();
        }
    };
    return (
        <div className='weather'>
            <h1 style={{color:'white'}} >check your city weather</h1>
            <div className='search-bar'>
                <input type="text" placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)} />     
                <button onClick={handleSearch}><Search /></button>
            </div>
            {weather && (
      <div className='weather-info'>
     <SunMedium size={90} color="white" />
    <p className='temp'><span className='temperature'>{weather.main.temp}</span>°C</p>
    <p className='location'>{weather.name}</p>
     <div className='humidity-info'>
    <CloudRain size={40} color="white" style={{marginLeft:'30px'}}/>
    <span>Humidity</span> 
    <p>{weather.main.humidity}%</p>
                    </div>
                </div>
            )}
        </div>
    );
}
