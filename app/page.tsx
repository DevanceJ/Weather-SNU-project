/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { WeatherPanel } from "@/components/weatherPanel";
import { Component } from "@/components/weatherchart";
import { useQuery } from "@tanstack/react-query";
import {
  getAllWeatherData,
  getLatestWeatherData,
  getGeoWeatherData,
} from "@/query/weather";
import { useEffect } from "react";
import { useWeatherStore } from "@/store/useWeather";
import { useGeoWeatherStore } from "@/store/useGeoWeather";
import { GeoWeatherInfo } from "@/components/geoWeather";
const Home = () => {
  const { setAllData, setLatestData, latestData } = useWeatherStore();
  const { setGeoData } = useGeoWeatherStore();

  const {
    isLoading: geoLoad,
    data: geoWeatherData,
    isError: geoError,
  } = useQuery<any>({
    queryKey: ["geo"],
    queryFn: getGeoWeatherData,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });

  const { isLoading, data, isError } = useQuery<any>({
    queryKey: ["latest"],
    queryFn: getLatestWeatherData,
    staleTime: 1000 * 60 * 1, // 1 minute
  });

  const {
    data: weatherData,
    isLoading: allLoad,
    isError: weatherErr,
  } = useQuery<any>({
    queryKey: ["all"],
    queryFn: getAllWeatherData,
    staleTime: 1000 * 60 * 1, // 1 minutes
  });

  useEffect(() => {
    if (data) {
      setLatestData(data);
    }
    if (geoWeatherData) {
      setGeoData(geoWeatherData);
    }
    if (weatherData) {
      setAllData(weatherData);
    }
  }, [
    data,
    setLatestData,
    setGeoData,
    setAllData,
    geoWeatherData,
    weatherData,
  ]);

  if (isLoading || allLoad || geoLoad) {
    return (
      <div className="h-full flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (isError || weatherErr || geoError) {
    return (
      <div className="flex justify-center items-center">
        Sorry the backend is down. Please try again later.
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#f0f8ff] to-[#f9f0ff] px-10 py-6">
      <div className="bg-college college text-white before:rounded-3xl rounded-3xl">
        <div>
          <div className="text-6xl font-bold">
            {latestData.temperature}°<span className="font-light">C</span>
          </div>
          <div className="text-lg">Shiv Nadar University, Greater Noida</div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-semibold">
            {new Date(latestData.createdAt).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div>
            {new Date(latestData.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </div>
        </div>
      </div>
      <div className="flex mt-6 gap-4 w-full mb-4 items-center flex-wrap lg:flex-nowrap">
        <div className="flex flex-col w-full lg:w-1/3 gap-4">
          <WeatherPanel />
          <GeoWeatherInfo />
        </div>
        <div className="flex-grow w-full lg:w-2/3">
          <Component />
        </div>
      </div>
    </div>
  );
};

export default Home;
