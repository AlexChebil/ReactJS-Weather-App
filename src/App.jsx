import React, { useState } from "react";

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
      console.log(apiData.cod);
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
      {typeof apiData === "undefined" ? (
        <div>AAAAAAA</div>
      ) : (
        <div>
          <h1>{apiData.name}</h1>
          <h2>{Math.round(apiData.main.temp)} </h2>
        </div>
      )}
      {/* {apiData.cod === "404" ? (
        <div>{apiData.message} </div>
      ) : (
        <div>AAAAAAA</div>
      )} */}
    </div>
  );
}

export default App;
