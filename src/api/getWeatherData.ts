const getWeatherData = async (location: { lat: string; lon: string }) => {
  const apiRes = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude={part}&appid=`,
  ).then((data) => data);

  if (!apiRes.ok) {
    throw new Error(`Something went wrong`);
  }

  if (!location) return [];

  return apiRes.json();
};

export default getWeatherData;
