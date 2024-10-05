import { create } from "zustand";

interface WeatherData {
  _id: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  wind_direction: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface WeatherStore {
  allData: WeatherData[];
  setAllData: (data: WeatherData[]) => void;
  latestData: WeatherData;
  setLatestData: (data: WeatherData) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  allData: [],
  setAllData: (data) => set({ allData: data }),
  latestData: {} as WeatherData,
  setLatestData: (data) => set({ latestData: data }),
}));
