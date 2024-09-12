
import './App.css'
import sun from "./assets/icon-sun.png"
import humidity from "./assets/icon-humidity.png"
import wind from "./assets/icon-wind.png"
import search from "./assets/icon-search.png"

function App() {

  return (
    <>
    <div id='main-container' >
      <div id='input-field'>
        <input type="text" placeholder='Search'/>
        <button><img src={search} alt="" /></button>
      </div>
      <div id='center'>
        <img src={sun} alt="sun" />
        <div style={{display: "flex", alignItems: "end"}}>
        <p style={{fontSize:"10vh"}} >16</p>
        <p style={{fontSize:"9vh"}} ><sup>o</sup>c</p>
        </div>
        <p>London</p>
      </div>
      <div id='bottom'>
        <div className='detail'>
          <img src={humidity} alt="cloud" />
          <div className='detail-text'>
            <p>91%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className='detail'>
          <img src={wind} alt="wind" />
          <div className='detail-text'>
            <p>3.6 Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
