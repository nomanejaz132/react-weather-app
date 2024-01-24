import { Coordinates } from "@/lib/types";

const getCurrentWeatherData = async (location: Coordinates) => {
  const apiRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_ID}`,
  ).then((data) => data);

  if (!apiRes.ok) {
    throw new Error(`Something went wrong`);
  }

  if (!location) return [];

  return apiRes.json();
};

export default getCurrentWeatherData;
