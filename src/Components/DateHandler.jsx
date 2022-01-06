import React, { useEffect, useState } from "react";

function DateHandler() {
  const date = new Date();
  let fullDate = date.toDateString();
  const [dummyState, setDummyState] = useState();

  useEffect(() => {
    const inter = setInterval(() => {
      setDummyState(true);
    }, 1000);
    return () => {
      clearInterval(inter);
      setDummyState(false);
    };
  }, [dummyState]); // this useEffect AND setInterval refresh the entire component every 1second to get new values

  let time =
    date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

  return (
    <div className='dateHandler'>
      <div>{fullDate} </div>
      <div>{time} </div>
    </div>
  );
}

export default DateHandler;
