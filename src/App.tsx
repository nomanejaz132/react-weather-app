import { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";
// import { formatSunTime } from "./lib/dateTimeUtils";
import { DEFAULT_LOCATION } from "./lib/config";

function App() {
  const [location] = useState(DEFAULT_LOCATION.coordinates);

  const { weatherData, isFetchingWeather } = useWeatherData(location);

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-5">
      {!isFetchingWeather && (
        <div>
          <h2 className="text-4xl text-blue-700">Weatherman</h2>
          <p className="text-base text-black">
            Temp: {weatherData?.current?.temp}&deg;
          </p>
          <p className="text-base text-black">
            Feels like: {weatherData?.current?.feels_like}&deg;
          </p>
          <p className="text-base text-black">
            Highest: {weatherData?.current?.max_temp}&deg;
          </p>
          <p className="text-base text-black">
            Wind: {weatherData?.current?.wind_speed}
          </p>
          <p className="flex text-base text-black">
            Wind Degree: {weatherData?.current?.wind_deg}{" "}
            <div
              className="flex flex-col"
              style={{
                transform: `rotate(${weatherData?.current?.wind_deg}deg)`,
              }}
            >
              !
            </div>
          </p>
          <p className="text-base text-black">
            Sunrise:{" "}
            {/* {formatSunTime(
              weatherData?.current?.sunrise,
              weatherData?.timezone_offset,
            )} */}
          </p>
          <p className="text-base text-black">
            Sunset:{" "}
            {/* {formatSunTime(
              weatherData?.current?.sunset,
              weatherData?.timezone_offset,
            )} */}
          </p>
          <p className="text-base text-black">
            UV Index: {weatherData?.current?.uvi * 10}
          </p>
          <p className="text-base text-black">
            Precipitation: {weatherData?.current?.rain?.["1h"]}
          </p>
          <p className="text-base text-black">
            Humidity: {weatherData?.current?.humidity}
          </p>
          <p className="text-base text-black">
            Visibility: {weatherData?.current?.visibility / 1000}
          </p>
          <p className="text-base text-black">
            Pressure: {weatherData?.current?.pressure}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
