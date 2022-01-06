import React from "react";

function DegreesToDirections({ deg, Apidata }) {
  switch (true) {
    case deg === 360 || (deg >= 0 && deg < 45):
      return "Pointing North";
    case deg >= 45 && deg < 90:
      return "Pointing NorthEast";
    case deg >= 90 && deg < 135:
      return "Pointing East";
    case deg >= 135 && deg < 180:
      return "Pointing SouthEast";
    case deg >= 180 && deg < 225:
      return "Pointing South";
    case deg >= 225 && deg < 270:
      return "Pointing SouthWest";
    case deg >= 270 && deg < 315:
      return "Pointing West";
    case deg >= 315 && deg < 359:
      return "Pointing NorthWest";

    default:
      break;
  }

  return <div> </div>;
}

export default DegreesToDirections;
