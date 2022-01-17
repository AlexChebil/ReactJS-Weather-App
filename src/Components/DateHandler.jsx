import React, { useEffect } from "react";

function DateHandler({ latitude, longitude, UTZ, UTZO }) {
  const apiKEY = "00659b464edf43ca82a48ab0ceef4b4f";

  async function getTime() {
    const response = await fetch(
      `https://api.ipgeolocation.io/timezone?apiKey=${apiKEY}&lat=${latitude}&long=${longitude}`
    );
    const data = await response.json();
    await UTZ(data.timezone);
    await UTZO(data.timezone_offset);
    return data;
  }

  useEffect(() => {
    getTime()
      .then((data) => data.time_24.split(""))
      .then((data) => data.reverse() && data.splice(data.length - 5))
      .then((data) => data.reverse()) //to get it back to it's initial state
      .then((data) => data.join(""))
      .then(
        (data) => (document.querySelector("#dateGoesHere").innerHTML = data) // display the date on the div
      );
    //the data in () is the outputed data of the last .then()
  }, [latitude]); // the latitude as dependency is to get new time value on every user input

  return (
    <div className='dateHandler'>
      <div id='dateGoesHere'></div>
    </div>
  );
}

export default DateHandler;
