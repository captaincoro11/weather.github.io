import axios from 'axios'
import React, { useState } from 'react'
import './App.css'
import clear from './assets/clear.png'
import clouds from './assets/clouds.png'
import humidity from './assets/humidity.png'
import mist from './assets/mist.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import wind from './assets/wind.png'
let weather_icon;



export default function App() {
  const [data, setData] = useState({})
 const [datta,setDatta]=useState({})
  //const [daa,setDaa]=useState(false)
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  const prl=`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=03aa470b700eaa4cb2d8c0defbb8f90f`


  const searchLocation = (event) => {
    try {
      if(event.key==='Enter')
   {

    axios.get(url).then((response)=>{

      setData(response.data);

    })
    axios.get(prl).then((response)=>{
      setDatta(response.data);
    })
    setLocation(' ');
      
    } }
    catch (error) {
      console.error('Error fetching data:', error);
      
      
    }
   
  
    

   }
  
 
  


  let humid =humidity;
  let windi=wind;



  if(data.weather)
  {
 if(data.weather[0].main ==='Clouds'){
 weather_icon=clouds;
 }
 else if(data.weather[0].main === 'Rain')
 {
 weather_icon=rain;
 }
 else if(data.weather[0].main === 'Clear')
 {
 weather_icon=clear;
 }
 else if(data.weather[0].main === 'Snow')
 {
 weather_icon=snow;
 }
 
 else if(data.weather[0].main === 'Haze')
 {
 weather_icon=mist;
 }
 else if(data.weather[0].main === 'Fog')
 {
 weather_icon=mist;
 }
 else if(data.weather[0].main === 'Smoke')
 {
 weather_icon=mist;
 }
  }
 
  
  
 
 





  return (
  <div className='main_container'>

  <div className='container'>
    <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="top">
        
      <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="middle">
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            
          
          </div>
          <div className="description">
          { data.weather ? <img src= {weather_icon} alt="none"/> : null}
           
          </div>
          </div>
          <div className="lipple">
          <div className="humidity">
            <img src={humid} alt="" />
            {data.main?<p>Humidity={data.main.humidity}%</p>:null}
          </div>
          <div className="wind" >
            
            <img src={windi} alt="" />
            {data.main?<p>Wind={data.wind.speed}MPH</p>:null}
          </div>

          </div>
      

          </div>
          <h1 className='weather'>Weather Forecast</h1>
          <div className="bottom">
           
            <div className="day1">
              <h1>Tomorrow</h1>
              {datta.list ? <p >{datta.list[1].weather[0].main}</p> : null}
              {datta.list ? <p >{datta.list[5].main.temp}°C</p> : null}
            </div>
            <div className="day2">
              <h1>Day2</h1>
              {datta.list ? <p >{datta.list[13].weather[0].main}</p> : null}
              {datta.list ? <p >{datta.list[13].main.temp}°C </p> : null}
            </div>
            <div className="day3">
              <h1>Day3</h1>
              {datta.list ? <p >{datta.list[21].weather[0].main}</p> : null}
              {datta.list ? <p >{datta.list[21].main.temp}°C </p> : null}
            </div>
            <div className="day4">
              <h1>Day4</h1>
              {datta.list ? <p >{datta.list[29].weather[0].main}</p> : null}
              {datta.list ? <p >{datta.list[29].main.temp}°C </p> : null}
            </div>
            <div className="day5">
              <h1>Day5</h1>
              {datta.list ? <p >{datta.list[37].weather[0].main} </p> : null}
              {datta.list ? <p >{datta.list[37].main.temp}°C </p> : null}
            </div>
          </div>
      </div>
  
  </div>
  )
}

