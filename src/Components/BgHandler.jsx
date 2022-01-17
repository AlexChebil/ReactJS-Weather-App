import React, { useEffect } from "react";

function BgHandler({ apiData }) {
  useEffect(() => {
    switch (true) {
      case apiData.weather[0].main === "Clear":
        document.body.removeAttribute("class"); // to remove all classes and start adding from 0
        document.body.classList.add("clearSky");
        break;

      case apiData.weather[0].description === "broken clouds" ||
        apiData.weather[0].description === "scattered clouds":
        document.body.removeAttribute("class");
        document.body.classList.add("heavyClouds");
        break;

      case apiData.weather[0].main === "Rain" &&
        apiData.weather[0].description !== "light rain":
        document.body.removeAttribute("class");
        document.body.classList.add("heavyRain");
        break;

      case apiData.weather[0].main === "Rain":
        document.body.removeAttribute("class");
        document.body.classList.add("lightRain");
        break;

      case apiData.weather[0].main === "Clouds":
        document.body.removeAttribute("class");
        document.body.classList.add("lightClouds");
        break;

      // add snow and mist here

      default:
        document.body.classList.add("lightRain");

        break;
    }
  }, [apiData]);

  return <div></div>;
}

export default BgHandler;
