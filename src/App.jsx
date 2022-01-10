import React, { useState } from "react";
import BgHandler from "./Components/BgHandler";
import DateHandler from "./Components/DateHandler";
import DegreesToDirections from "./Components/DegreesToDirections";
import ErrorHandler from "./Components/ErrorHandler";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const apiKey = "c3ba5e0699ab7ddd951ea6fd02b9d372";
  const [city, updatecity] = useState("");
  const [apiData, setApiData] = useState();
  const [flag, setflag] = useState("");
  const date = new Date();
  let fullDate = date.toDateString();

  function onEnter(e) {
    if (e.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => setApiData(data))
        .catch((error) => console.log(error));
    }
  }

  function switchStatusClass() {
    document.querySelector(".flexContStatus").classList.toggle("active");
  }
  function switchWindClass() {
    document.querySelector(".flexContWind").classList.toggle("active");
  }
  function switchComfortClass() {
    document.querySelector(".comfort").classList.toggle("active");
  }

  function Getflag() {
    fetch(`https://countryflagsapi.com/png/${apiData.sys.country}`)
      .then((response) => setflag(response.url))
      .catch((error) => console.log(error));
  }

  function RR() {
    let isTrue = document.querySelector(".flagImg");
    isTrue && (document.querySelector(".flagImg").src = flag);
  }

  return (
    <div className='core'>
      <input
        placeholder='Enter a City Name...'
        value={city}
        onChange={(e) => updatecity(e.target.value)}
        onKeyPress={onEnter}
      />
      {apiData === undefined ||
      apiData.cod === "404" ||
      apiData.cod === "400" ? (
        <h3>Enter A Valid City Name..</h3>
      ) : (
        <div>
          <h1 className='country'>{apiData.name}</h1>

          <h2 className='dateString'>{fullDate} </h2>

          <img onLoad={(Getflag(), RR())} className='flagImg' src='aa' alt='' />

          <h2>
            <DateHandler />
          </h2>

          <h1 className='main temp'>{Math.round(apiData.main.temp)}°C</h1>

          <div className='flexCont'>
            <h2 className='flex'>Min: {Math.round(apiData.main.temp_min)}°</h2>
            <h2 className='flex'>Feels Like: {apiData.main.feels_like}°</h2>
            <h2 className='flex'>Max: {Math.round(apiData.main.temp_max)}°</h2>
          </div>

          <h2 onClick={switchComfortClass}>Comfort🠻</h2>
          <div className='comfort'>
            <span id='humidityValue'>{apiData.main.humidity}%</span>

            <CircularProgress
              className='CircularProgress'
              variant='determinate'
              value={apiData.main.humidity}
            />

            <span id='humidity'> Humidity </span>
          </div>

          <h2 className='status' onClick={switchStatusClass}>
            Status🠻
          </h2>

          <div className='flexContStatus active'>
            <div>
              Overall <h3>{apiData.weather[0].main}</h3>
            </div>

            <div>
              Description <h3>{apiData.weather[0].description} </h3>
            </div>

            <div>
              Pressure <h3>{apiData.main.pressure} hPa </h3>
            </div>
          </div>

          <h2 className='status' onClick={switchWindClass}>
            Wind🠻
          </h2>

          <div className='flexContWind active'>
            <div>
              Speed
              <h4> {apiData.wind.speed}Km/h </h4>
            </div>

            <div>
              Direction
              <h4>
                {apiData.wind.deg}°,
                <DegreesToDirections deg={apiData.wind.deg} />
              </h4>
            </div>

            <div>
              Gust
              <h4> {apiData.wind.gust}M/s </h4>
            </div>
          </div>

          <h2>
            <div>Longitude: {apiData.coord.lon}</div>
            <div>Latitude: {apiData.coord.lat}</div>
          </h2>

          <BgHandler apiData={apiData} />
        </div>
      )}

      {apiData && <ErrorHandler apiData={apiData} city={city} />}
    </div>
  );
}

export default App;
