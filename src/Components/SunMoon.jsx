import React, { useEffect, useState } from "react";

function SunMoon({ latitude, longitude, sunrise, sunset }) {
  const apiKEY = "00659b464edf43ca82a48ab0ceef4b4f"; //different from the default api

  //Azimuth
  const [moonAzimuth, setMoonAzimuth] = useState();
  const [sunAzimuth, setSunAzimuth] = useState();

  const [daylength, setdaylength] = useState();

  async function FetchSunMoon() {
    const result = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${apiKEY}&lat=-${latitude}&long=${longitude}`
    );
    const data = await result.json();

    sunrise(data.sunrise);
    sunset(data.sunset);

    setMoonAzimuth(data.moon_azimuth.toFixed(1));
    setSunAzimuth(data.sun_azimuth.toFixed(1));

    setdaylength(data.day_length);
  }

  useEffect(() => {
    FetchSunMoon().catch((error) => console.log(error));
  }, [latitude, longitude]);
  return (
    { sunrise },
    (
      <div className='sunMoon'>
        <h3 className='Azimuth'>
          Sun Azimuth: <div>{sunAzimuth}°</div>
        </h3>
        <h3>
          daylength <div>{daylength}h</div>
        </h3>
        <h3 className='Azimuth'>
          Moon Azimuth <div> {moonAzimuth}°</div>
        </h3>
      </div>
    )
  );
}

export default SunMoon;
