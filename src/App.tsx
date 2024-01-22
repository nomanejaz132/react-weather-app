import { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";
import { formatSunTime } from "./lib/dateTimeUtils";
import { DEFAULT_LOCATION } from "./lib/config";
import { Card } from "@/components/ui/card";

function App() {
  const [location] = useState(DEFAULT_LOCATION.coordinates);

  const { weatherData, isFetchingWeather } = useWeatherData(location);

  return (
    <div className="container mx-auto flex min-h-screen flex-col px-[1rem] py-4 antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black md:px-[2rem]">
      <h2 className="pb-5 text-4xl text-blue-700">Weatherman</h2>
      {!isFetchingWeather && (
        <div className="grid grid-cols-5 gap-4">
          <Card className="text-base text-black">
            Temp: {weatherData?.current?.temp}&deg;
            <br /> Feels like: {weatherData?.current?.feels_like}&deg;
            <br /> Highest: {weatherData?.current?.max_temp}&deg;
            <br /> Lowest: {weatherData?.current?.min_temp}&deg;
          </Card>
          <Card className="text-base text-black">
            Wind: {weatherData?.current?.wind_speed}
          </Card>
          <Card className="flex text-base text-black">
            Wind Degree: {weatherData?.current?.wind_deg}{" "}
            <div
              className="flex flex-col"
              style={{
                transform: `rotate(${weatherData?.current?.wind_deg}deg)`,
              }}
            >
              !
            </div>
          </Card>
          <Card className="text-base text-black">
            Sunrise:{" "}
            {formatSunTime(
              weatherData?.current?.sunrise,
              weatherData?.timezone_offset,
            )}
          </Card>
          <Card className="text-base text-black">
            Sunset:{" "}
            {formatSunTime(
              weatherData?.current?.sunset,
              weatherData?.timezone_offset,
            )}
          </Card>
          <Card className="text-base text-black">
            UV Index: {weatherData?.current?.uvi * 10}
          </Card>
          <Card className="text-base text-black">
            Precipitation: {weatherData?.current?.rain?.["1h"]}
          </Card>
          <Card className="text-base text-black">
            Humidity: {weatherData?.current?.humidity}
          </Card>
          <Card className="text-base text-black">
            Visibility: {weatherData?.current?.visibility / 1000}
          </Card>
          <Card className="text-base text-black">
            Pressure: {weatherData?.current?.pressure}
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
