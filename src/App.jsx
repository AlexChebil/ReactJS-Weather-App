import React, { useEffect, useState } from "react";
import Usefetch from "./Components/usefetch";

function App() {
  const NEWAPI = "58fb9d76dd369fd0790961965fda0e81";
  
  const [city, updatecity] = useState("");

  const { apiData } = Usefetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${NEWAPI}`)

  console.log(apiData);


  
  return (
    <div className="core">
      <input
        placeholder="Enter a City Name..."
        value={city}
        onChange={(e) => updatecity(e.target.value)}
      />

      <h1>{city.toUpperCase()}</h1>
    </div>
  );
}

export default App;
