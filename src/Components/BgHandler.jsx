import React, { useEffect } from "react";

function BgHandler({ dateFromApi, cityFound }) {
  if (dateFromApi !== undefined) {
    var parsed = parseInt(dateFromApi, 10); // 'var' to be accessed on all the document
    //parseInt() to convert data (string) to number
  }
  const lateNight = [0, 1, 2, 3];

  useEffect(() => {
    if (cityFound === true) {
      document.body.style = "inherit";
    }
  }, [cityFound]);

  useEffect(() => {
    switch (true) {
      case parsed >= 4 && parsed <= 7:
        document.body.removeAttribute("class"); // to remove all classes and start adding from 0
        document.body.classList.add("dawn");
        break;

      case parsed > 7 && parsed <= 11:
        document.body.removeAttribute("class");
        document.body.classList.add("morning");
        break;

      case parsed > 11 && parsed <= 15:
        document.body.removeAttribute("class");
        document.body.classList.add("noon");
        break;

      case parsed > 15 && parsed <= 18:
        document.body.removeAttribute("class");
        document.body.classList.add("afternoon");
        break;

      case parsed > 18 && parsed <= 20:
        document.body.removeAttribute("class");
        document.body.classList.add("evening");
        break;

      case (parsed > 20 && parsed <= 24) || lateNight.includes(parsed):
        document.body.removeAttribute("class");
        document.body.classList.add("night");
        break;

      default:
        break;
    }
  }, [dateFromApi]);

  return <div></div>;
}

export default BgHandler;
