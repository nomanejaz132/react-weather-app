import { Coordinates } from "@/lib/types";

const getWeatherData = async (location: Coordinates) => {
  const apiRes = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude={part}&appid=${import.meta.env.VITE_OPEN_WEATHER_ID}`,
  ).then((data) => data);

  if (!apiRes.ok) {
    throw new Error(`Something went wrong`);
  }

  if (!location) return [];

  return apiRes.json();
};

export default getWeatherData;
