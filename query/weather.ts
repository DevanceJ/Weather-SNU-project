const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const lat = 28.52857959098862;
const lon = 77.57862557301291;
const query = lat + "," + lon;
const API_key = process.env.NEXT_PUBLIC_API;
export const getAllWeatherData = async () => {
  try {
    const res = await fetch(`${backendUrl}/v1/all`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLatestWeatherData = async () => {
  try {
    const res = await fetch(`${backendUrl}/v1/latest`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getGeoWeatherData = async () => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_key}&q=${query}&aqi=no`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
