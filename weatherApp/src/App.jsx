
import './App.css'
import sun from "./assets/icon-sun.png"
import humidityIcon from "./assets/icon-humidity.png"
import windIcon from "./assets/icon-wind.png"
import searchIcon from "./assets/icon-search.png"
import { useEffect, useState } from 'react'

function App() {

  const apiKey = "e277829c34c5f9721a82494c55ff26ff"

  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const [city, setCity]= useState("London")
  const [cityName, setCityName]= useState("London")

  const search = async(city)=> {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      // console.log(data.main.temp);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);

    } catch (error) {
      setCityName("Town not found")
      setTemp(0);
      setHumidity(0);
      setWind(0);
    }
  }

      useEffect(()=>{
        search(city);
        console.log(city)
      },[])

  

  return (
    <>
    <div id='main-container' >
      <div id='input-field'>
        <input type="text" placeholder='Search' onChange={(e)=> {setCity(e.target.value)}}/>
        <button onClick={()=> {search(city), console.log({city}, setCityName(city))}} ><img src={searchIcon} alt="" /></button>
      </div>
      <div id='center'>
        <img src={sun} alt="sun" />
        <div style={{display: "flex", alignItems: "end"}}>
        <p style={{fontSize:"10vh"}} >{Math.floor(temp)}</p>
        <p style={{fontSize:"9vh"}} ><sup>o</sup>c</p>
        </div>
        <p>{cityName}</p>
      </div>
      <div id='bottom'>
        <div className='detail'>
          <img src={humidityIcon} alt="cloud" />
          <div className='detail-text'>
            <p>{humidity}</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className='detail'>
          <img src={windIcon} alt="wind" />
          <div className='detail-text'>
            <p>{wind} Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
