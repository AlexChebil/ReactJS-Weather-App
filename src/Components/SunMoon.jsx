import React, { useEffect, useState } from "react";

function SunMoon({ latitude, longitude, sunrise, sunset }) {
  const apiKEY = "00659b464edf43ca82a48ab0ceef4b4f";

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
        <div className='Azimuth'>
          Sun's Azimuth: <div>{sunAzimuth}°</div>{" "}
        </div>
        <div>
          daylength <div>{daylength}</div>
        </div>
        <div className='Azimuth'> {moonAzimuth}° </div>
      </div>
    )
  );
}

export default SunMoon;
