import React, { useEffect } from "react";

function RandomGradient() {
  const jsonData = require("../Data/Colors.json");
  const colors = Object.keys(jsonData);

  const body = document.querySelector("body");

  function getColor() {
    const randomColor = Math.floor(Math.random() * colors.length);
    const findColor = colors.find((entry, index) => index === randomColor);
    return findColor;
  }

  useEffect(() => {
    getColor();
    body.style.background = `linear-gradient(${getColor()},${getColor()})`;
  }, []);

  return <div></div>;
}

export default RandomGradient;
