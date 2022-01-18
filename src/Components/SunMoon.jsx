import React, { useEffect, useState } from "react";

function SunMoon({ latitude, longitude }) {
  const apiKEY = "00659b464edf43ca82a48ab0ceef4b4f";
  const [sunrise, setSunrise] = useState();
  const [moonrise, setMoonrise] = useState();

  async function FetchSunMoon(params) {
    const result = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${apiKEY}&lat=-${latitude}&long=${longitude}`
    );
    const data = await result.json();
    setSunrise(data.sunrise);
    setMoonrise(data.moonrise);
    console.log(data);
  }
  /* FetchSunMoon()
    .then((data) =>
      (document.querySelector(".sun").innerHTML = data.sunrise)(
        (document.querySelector(".moon").innerHTML = data.moonrise)
      )
    ) 
    .catch((error) => console.log(error));*/
  useEffect(() => {
    FetchSunMoon();
  }, [latitude, longitude]);
  return (
    <div>
      <div className='sun'>{sunrise} </div>
      <div className='moon'>{moonrise} </div>
    </div>
  );
}

export default SunMoon;
