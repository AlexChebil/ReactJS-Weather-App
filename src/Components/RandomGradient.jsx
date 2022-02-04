import React, { useEffect } from "react";

function RandomGradient({ setCityFound, cityFound }) {
  const jsonData = require("../Data/Colors.json");
  const colors = Object.keys(jsonData);

  function getColor() {
    const randomColor = Math.floor(Math.random() * colors.length);
    const findColor = colors.find((entry, index) => index === randomColor);
    return findColor;
  }

  useEffect(() => {
    document.body.style.background = `linear-gradient(${getColor()},${getColor()})`;
    setCityFound(true);
  }, []);

  return <div></div>;
}

export default RandomGradient;
