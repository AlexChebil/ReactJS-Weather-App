import React from "react";

function DegreesToDirections({ deg, Apidata }) {
  switch (true) {
    case deg === 360 || (deg >= 0 && deg < 45):
      return " North";
    case deg >= 45 && deg < 90:
      return " NorthEast";
    case deg >= 90 && deg < 135:
      return " East";
    case deg >= 135 && deg < 180:
      return " SouthEast";
    case deg >= 180 && deg < 225:
      return " South";
    case deg >= 225 && deg < 270:
      return " SouthWest";
    case deg >= 270 && deg < 315:
      return "West";
    case deg >= 315 && deg < 359:
      return " NorthWest";

    default:
      break;
  }

  return <div> </div>;
}

export default DegreesToDirections;
