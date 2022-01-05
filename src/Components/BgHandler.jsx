import React, { useEffect } from "react";

function BgHandler({ apiData }) {
  useEffect(() => {
    if (apiData.main.temp <= 10) {
      document.body.classList.remove("day");
      document.body.classList.add("night");
    }
    if (apiData.main.temp > 10) {
      document.body.classList.remove("night");
      document.body.classList.add("day");
    }
  }, [apiData]);

  return <div></div>;
}

export default BgHandler;
