import React, { useEffect, useState } from "react";

function DateHandler() {
  const date = new Date();
  const [dummyState, setDummyState] = useState();
  let seconds = date.getSeconds();
  let fullDate = date.toDateString();

  useEffect(() => {
    const inter = setInterval(() => {
      setDummyState(true);
    }, 1000);
    return () => {
      clearInterval(inter);
      setDummyState(false);
    };
  }, [dummyState]); // this useEffect AND setInterval refresh the entire component every 1second to get new values

  let time = date.getHours() + " : " + date.getMinutes() + " : " + seconds;

  return (
    <div>
      <div>{fullDate} </div>
      <div>{time} </div>
    </div>
  );
}

export default DateHandler;
