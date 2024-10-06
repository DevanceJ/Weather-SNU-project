const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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
    const res = await fetch(`${backendUrl}/v1/geo`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
