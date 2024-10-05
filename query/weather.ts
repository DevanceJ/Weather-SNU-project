const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const lat = 28.52857959098862;
const lon = 77.57862557301291;
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
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
