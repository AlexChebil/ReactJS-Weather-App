import React from "react";

function DegreesToDirections({ deg }) {
  if (deg === 360 || (deg >= 0 && deg < 45)) {
    return "Pointing North";
  }
  if (deg >= 45 && deg < 90) {
    return "Pointing NorthEast";
  }
  if (deg >= 90 && deg < 135) {
    return "Pointing East";
  }
  if (deg >= 135 && deg < 180) {
    return "Pointing SouthEast";
  }
  if (deg >= 180 && deg < 225) {
    return "Pointing South";
  }
  if (deg >= 225 && deg < 270) {
    return "Pointing SouthWest";
  }
  if (deg >= 270 && deg < 315) {
    return "Pointing West";
  }
  if (deg >= 315 && deg < 359) {
    return "Pointing NorthWest";
  }

  return <div></div>;
}

export default DegreesToDirections;
