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
    }
  }

  return (
    <div className='core'>
      <input
        placeholder='Enter a City Name...'
        value={city}
        onChange={(e) => updatecity(e.target.value)}
        onKeyPress={onEnter}
      />
      {typeof apiData === "undefined" || apiData.cod === "404" ? (
        <h3>Enter A Valid City Name..</h3>
      ) : (
        <div>
          <h1>{apiData.name}</h1>
          <h2>{Math.round(apiData.main.temp)} </h2>
        </div>
      )}

      {apiData && apiData.cod === "404" ? (
        <h2>{apiData.message.toUpperCase()} </h2>
      ) : null}
    </div>
  );
}

export default App;
