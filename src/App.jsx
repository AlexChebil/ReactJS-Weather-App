import React, { useState } from "react";
import BgHandler from "./Components/BgHandler";
import DateHandler from "./Components/DateHandler";
import DegreesToDirections from "./DegreesToDirections";
import ErrorHandler from "./ErrorHandler";

function App() {
  const apiKey = "c3ba5e0699ab7ddd951ea6fd02b9d372";
  const [city, updatecity] = useState("");
  const [apiData, setApiData] = useState();

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
  //document.body.classList.add("night");

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
          <h1 className='country'>
            {apiData.name} <br /> {apiData.sys.country}
          </h1>

          <h2>
            <DateHandler />
          </h2>

          <h1 className='main temp'>{Math.round(apiData.main.temp)}°C</h1>

          <div className='flexCont'>
            <h2 className='flex'>Min: {Math.round(apiData.main.temp_min)}°</h2>
            <h2 className='flex'>Feels Like: {apiData.main.feels_like}°</h2>
            <h2 className='flex'>Max: {Math.round(apiData.main.temp_max)}°</h2>
          </div>
          <h2>Status</h2>
          <div className='flexContStatus'>
            <h2>Overall Status : {apiData.weather[0].main} </h2>
            <h2>
              Status Description :{" "}
              {apiData.weather[0].description.toUpperCase()}
            </h2>
            <h2>Pressure : {apiData.main.pressure} </h2>
          </div>

          <h2 className='main'>
            Wind Direction : {apiData.wind.deg} Degrees
            <span className='nestedSpans'>
              <DegreesToDirections deg={apiData.wind.deg} />
            </span>
          </h2>

          <h2>Wind Speed: {apiData.wind.speed}Km/h </h2>
          <h2>
            Geographical coordinates :<div>Longitude: {apiData.coord.lon}</div>
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
