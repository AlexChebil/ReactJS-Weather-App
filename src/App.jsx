import React, { useState } from "react";
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

  return (
    <div className="core">
      <input
        placeholder="Enter a City Name..."
        value={city}
        onChange={(e) => updatecity(e.target.value)}
        onKeyPress={onEnter}
      />
      {typeof apiData === "undefined" ||
      apiData.cod === "404" ||
      apiData.cod === "400" ? (
        <h3>Enter A Valid City Name..</h3>
      ) : (
        <div>
          <h1>
            {apiData.name}, {apiData.sys.country}
          </h1>
          <h2 className="main">
            Temperature: {Math.round(apiData.main.temp)}{" "}
          </h2>
          <h2>Overall Weather: {apiData.weather[0].main} </h2>
          <h2>Description: {apiData.weather[0].description.toUpperCase()} </h2>
          <h2 className="main">Wind Direction : {apiData.wind.deg} Degrees </h2>
          <h2>Wind Speed: {apiData.wind.speed}Km/h </h2>
          <h2>
            Geographical coordinates : <br /> Latitude: {apiData.coord.lat},
            Longitude:
            {apiData.coord.lon}
          </h2>
        </div>
      )}

      {apiData && <ErrorHandler apiData={apiData} city={city} />}
    </div>
  );
}

export default App;
