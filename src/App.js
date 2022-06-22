import { useState } from "react";
import axios from 'axios';
import ShowTemp from "./ShowTemp";
import './app.css'

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState({
    description:"",
    temp:0,
    max_temp:0,
    min_temp:0,
    humidity:0,
    sunrise:0,
    sunset:0,
    country:"",
  })

  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15337f5cc3c3c316e4f6f4e4d34c0cc7`)
    .then((response)=>{
      setData({
        description:response.data.weather[0].description,
        temp:response.data.main.temp,
        max_temp: response.data.main.temp_max,
        min_temp: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        country: response.data.sys.country,
      })
    })
  }
  return (
    <div className="main container text-center my-2">
      <h1>Weather App using React</h1>
      <input type="text" className="form-control" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      <button className="btn btn-primary mx-2" type="submit" onClick={handleClick}>Search</button>

      <div className="main-content">
        <ShowTemp text={data}/>
      </div>
    </div>
  );
}

export default App;
