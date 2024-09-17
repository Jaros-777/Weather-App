import "./App.css";
import sun from "./assets/icon-sun.png";
import humidityIcon from "./assets/icon-humidity.png";
import windIcon from "./assets/icon-wind.png";
import searchIcon from "./assets/icon-search.png";
import iconList from "./assets/icon-list.png";
import { useEffect, useState } from "react";

import NavBar from "./navBar.jsx";

function App() {
  const apiKey = "YOUR API KEY";

  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [icon, setIcon] = useState(0);
  const val = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const [city, setCity] = useState("Warszawa");
  const [cityName, setCityName] = useState("Warszawa");


  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // console.log(data.main.temp);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setIcon(data.weather[0].icon);
      setCityName(city);
    } catch (error) {
      setCityName("Town not found");
      setTemp(0);
      setHumidity(0);
      setWind(0);
    }
  };

  useEffect(() => {
    search(city);
  }, []);

  function changeTown(City) {
    search(City);
    
  }

  return (
    <>
      <div id="main-container">
        <NavBar changeTown={changeTown} city={city} setCity={setCity}></NavBar>
        <div id="center">
          <img src={val} alt={icon} />
          <div style={{ display: "flex", alignItems: "end" }}>
            <p style={{ fontSize: "9vh" }}>{Math.floor(temp)}</p>
            <p style={{ fontSize: "8vh" }}>
              <sup>o</sup>c
            </p>
          </div>
          <p>{cityName}</p>
        </div>
        <div id="bottom">
          <div className="detail">
            <img src={humidityIcon} alt="cloud" />
            <div className="detail-text">
              <p>{humidity}</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="detail">
            <img src={windIcon} alt="wind" />
            <div className="detail-text">
              <p>{wind} Km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
