import React, { useEffect, useState } from "react";
import BgHandler from "./Components/BgHandler";
import DateHandler from "./Components/DateHandler";
import DegreesToDirections from "./Components/DegreesToDirections";
import ErrorHandler from "./Components/ErrorHandler";
import CircularProgress from "@mui/material/CircularProgress";
import SunMoon from "./Components/SunMoon";

function App() {
  const apiKey = "c3ba5e0699ab7ddd951ea6fd02b9d372";
  const [city, updatecity] = useState("");
  const [apiData, setApiData] = useState();
  const [flag, setflag] = useState("");
  const [timezone, updateTimezone] = useState();
  const [timezoneOffset, updateTimezoneOffset] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

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
  function switchGeographicalClass() {
    document.querySelector(".gridCont").classList.toggle("active");
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

  useEffect(() => {
    flag && document.querySelector(".flagImg").classList.toggle("active");
  }, [flag]);

  return (
    <div className='core'>
      <input
        placeholder='Enter a City Name...'
        value={city}
        onChange={(e) => updatecity(e.target.value.toUpperCase())}
        onKeyPress={onEnter}
        onClick={() => updatecity(" ")} //blank input on click
      />
      {apiData === undefined ||
      apiData.cod === "404" ||
      apiData.cod === "400" ? (
        <h3>Enter A Valid City Name..</h3>
      ) : (
        <div>
          <h1 className='country'>{apiData.name}</h1>

          <h2 className='dateString'>{fullDate} </h2>

          <img
            onLoad={(Getflag(), RR())}
            className='flagImg'
            src=''
            alt='FLAG'
          />

          <h2>
            <DateHandler
              latitude={apiData.coord.lat}
              longitude={apiData.coord.lon}
              UTZ={updateTimezone}
              UTZO={updateTimezoneOffset}
            />
          </h2>

          <h1 className='main temp'>{Math.round(apiData.main.temp)}°C</h1>

          <div className='flexCont'>
            <h2 className='flex'>Min: {Math.round(apiData.main.temp_min)}°</h2>
            <h2 className='flex'>
              Feels: {apiData.main.feels_like.toFixed(1)}°
              {/* // this is a string, parseInt to convert to num */}
            </h2>
            <h2 className='flex'>Max: {Math.round(apiData.main.temp_max)}°</h2>
          </div>

          <h2 className='status' onClick={switchComfortClass}>
            Comfort🠻
          </h2>

          <div className='comfort active'>
            <h3>{sunrise} </h3>
            <div>
              <span id='humidityValue'>{apiData.main.humidity}%</span>

              <CircularProgress
                className='CircularProgress'
                variant='determinate'
                value={apiData.main.humidity}
              />

              <span id='humidity'> Humidity </span>
            </div>

            <h3>{sunset} </h3>
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
          <h2 onClick={switchGeographicalClass} className='status'>
            Geographical Coordinates🠻
          </h2>
          <div className='gridCont active'>
            <h2>Longitude: {apiData.coord.lon}</h2>
            <h2>Latitude: {apiData.coord.lat}</h2>
            <h2> Timezone: {timezone} </h2>
            <h2> UTC Offset: {timezoneOffset} </h2>
          </div>

          <BgHandler apiData={apiData} />
          <SunMoon
            latitude={apiData.coord.lat}
            longitude={apiData.coord.lon}
            sunrise={setSunrise}
            sunset={setSunset}
          />
        </div>
      )}

      {apiData && <ErrorHandler apiData={apiData} city={city} />}
    </div>
  );
}

export default App;
