export const getDirection = (windDirection: number) => {
  let direction = "";
  if (windDirection >= 0 && windDirection <= 10) {
    direction = "N";
  } else if (windDirection > 10 && windDirection <= 80) {
    direction = "NE";
  } else if (windDirection > 80 && windDirection <= 100) {
    direction = "E";
  } else if (windDirection > 100 && windDirection <= 170) {
    direction = "SE";
  } else if (windDirection > 170 && windDirection <= 190) {
    direction = "S";
  } else if (windDirection > 190 && windDirection <= 260) {
    direction = "SW";
  } else if (windDirection > 260 && windDirection <= 280) {
    direction = "W";
  } else if (windDirection > 280 && windDirection <= 350) {
    direction = "NW";
  } else if (windDirection > 350 && windDirection <= 360) {
    direction = "N";
  }
  return direction;
};
