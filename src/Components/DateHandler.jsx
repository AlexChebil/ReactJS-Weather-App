import React, { useEffect, useState } from "react";

function DateHandler({ apiCountryDate }) {
  const date = new Date();
  const [dummyState, setDummyState] = useState();

  const UTCinHours = apiCountryDate / 3600;
  let countryTime = date.getHours() + Math.round(UTCinHours) - 1; // -1 because we're not in UTC +1 ,not 0

  if (countryTime >= 24) {
    let dayPassed = date.getHours() + UTCinHours - 24; // the remaining hours after midnight
    countryTime = 0 + dayPassed - 1; // -1 because we're not in UTC +1 ,not 0
  }

  useEffect(() => {
    const inter = setInterval(() => {
      setDummyState(true);
    }, 1000);
    return () => {
      clearInterval(inter);
      setDummyState(false);
    };
  }, [dummyState]); // this useEffect AND setInterval refresh the entire component every 1s to get new values

  let time =
    countryTime + " : " + date.getMinutes() + " : " + date.getSeconds();

  return (
    <div className='dateHandler'>
      <div>{time} </div>
    </div>
  );
}

export default DateHandler;
