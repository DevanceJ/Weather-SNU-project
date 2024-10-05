import React from "react";
import { Droplet, Wind, ThermometerIcon } from "lucide-react";
import { useGeoWeatherStore } from "@/store/useGeoWeather";
import { getDirection } from "@/lib/getDirection";

export const GeoWeatherInfo = () => {
  const { gData } = useGeoWeatherStore();
  const temperature = gData?.main?.temp ?? 0;
  const humidity = gData?.main?.humidity ?? 0;
  const windSpeed = gData?.wind?.speed ?? 0;
  const windDirection = gData?.wind?.deg ?? 0;
  const direction = getDirection(windDirection);
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 text-black rounded-xl shadow-md p-6">
      <div className="flex justify-between text-center flex-col mb-2">
        <h6 className="text-gray-600 font-medium">Data from Coordinates</h6>
        <h6 className="text-gray-500 text-sm">
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </h6>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Temperature */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 font-medium">Temperature</span>
          <div className="flex items-center">
            <ThermometerIcon className="text-yellow-600 bg-yellow-100 p-1 rounded-full" />
            <span className="ml-2 text-lg">{temperature}°C</span>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 font-medium">Wind Speed</span>
          <div className="flex items-center">
            <Wind
              className="text-blue-400 bg-blue-100 p-1 rounded-full"
              size={28}
            />
            <span className="ml-2 text-lg">{windSpeed} km/h</span>
          </div>
        </div>

        {/* Humidity */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 font-medium">Humidity</span>
          <div className="flex items-center">
            <Droplet
              className="text-blue-500 bg-blue-100 p-1 rounded-full"
              size={28}
            />
            <span className="ml-2 text-lg">{humidity}%</span>
          </div>
        </div>

        {/* Wind Direction */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 font-medium">Wind Direction</span>
          <div className="flex items-center">
            <span className="text-lg">{windDirection}°</span>
            <span className="ml-2 text-purple-400 font-semibold text-base">
              {direction}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
