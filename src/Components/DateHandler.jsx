import React, { useEffect } from "react";

function DateHandler({ latitude, longitude }) {
  const apiKEY = "00659b464edf43ca82a48ab0ceef4b4f";

  async function getTime() {
    const response = await fetch(
      `https://api.ipgeolocation.io/timezone?apiKey=${apiKEY}&lat=${latitude}&long=${longitude}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    getTime().then(
      (data) =>
        (document.querySelector("#dateGoesHere").innerHTML = data.time_24)
    );
  }, []);
  return (
    <div className='dateHandler'>
      <div id='dateGoesHere'> </div>
    </div>
  );
}

export default DateHandler;
