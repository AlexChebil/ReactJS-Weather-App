import React from "react";

function DateHandler() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  const day = days[date.getDay()];
  const dayNum = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div>
      <span>{day} </span>
      <span>{dayNum} </span>
      <span>{month} </span>
      <span>{year} </span>
    </div>
  );
}

export default DateHandler;
