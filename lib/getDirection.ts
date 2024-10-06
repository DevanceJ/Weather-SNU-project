export const getDirection = (windDirection: number) => {
  let direction = "";
  if (windDirection >= -10 && windDirection <= 10) {
    direction = "N";
  } else if (windDirection > 10 && windDirection <= 80) {
    direction = "NE";
  } else if (windDirection > 80 && windDirection <= 100) {
    direction = "E";
  } else if (windDirection > 100 && windDirection <= 170) {
    direction = "SE";
  } else if (
    (windDirection > 170 && windDirection <= 180) ||
    (windDirection >= -180 && windDirection <= -170)
  ) {
    direction = "S";
  } else if (windDirection > -170 && windDirection <= -100) {
    direction = "SW";
  } else if (windDirection > -100 && windDirection <= -80) {
    direction = "W";
  } else if (windDirection > -80 && windDirection <= -10) {
    direction = "NW";
  }
  return direction;
};
