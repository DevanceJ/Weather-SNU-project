import { Droplet, ThermometerSun, Wind, Compass } from "lucide-react";
import { InfoItem } from "@/components/infocard";
import { useWeatherStore } from "@/store/useWeather";

export const WeatherInfoPanel = () => {
  const { latestData } = useWeatherStore();
  const temperature = latestData.temperature;
  const humidity = latestData.humidity;
  const windSpeed = latestData.wind_speed;
  const windDirection = latestData.wind_direction;

  return (
    <div className="bg-white rounded-lg shadow-md  p-4 sm:p-6 mb-4 w-50">
      <h4 className="text-center text-lg font-semibold mb-2">
        Data from Weather Station
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <InfoItem
          icon={<ThermometerSun className="text-yellow-300" size={24} />}
          title="Temperature"
          value={`${temperature}°C`}
        />
        <InfoItem
          icon={<Droplet className="text-blue-500" size={24} />}
          title="Humidity"
          value={`${humidity}%`}
        />
        <InfoItem
          icon={<Wind className="text-blue-400" size={24} />}
          title="Wind Speed"
          value={`${windSpeed} km/h`}
        />
        <InfoItem
          icon={<Compass className="text-purple-400" size={24} />}
          title="Wind Direction"
          value={`${windDirection}°`}
        />
      </div>
    </div>
  );
};
