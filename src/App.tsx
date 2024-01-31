import { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";
// import { formatSunTime } from "./lib/dateTimeUtils";
import { DEFAULT_LOCATION } from "./lib/config";
// import { Card } from "@/components/ui/card";
import { CurrentWeather } from "@/components/widgets/CurrentWeather";
import useCurrentWeatherData from "./hooks/useCurrentWeatherData";
import { TenDaysForecast } from "./components/widgets/TenDaysForecast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { formatSunTime } from "./lib/dateTimeUtils";

function App() {
  const [location] = useState(DEFAULT_LOCATION.coordinates);

  const { weatherData, isFetchingWeather } = useWeatherData(location);
  const { currentWeatherData, isFetchingCurrentWeather } =
    useCurrentWeatherData(location);

  // console.log(weatherData, "weather data general");
  // console.log(currentWeatherData, "weather data current");

  return (
    <div className="container mx-auto flex min-h-screen flex-col px-[1rem] py-4 antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black md:px-[2rem]">
      <h2 className="pb-5 text-4xl text-blue-700">Weatherman</h2>
      {/* {!isFetchingWeather && (
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
      )} */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
          {!isFetchingCurrentWeather && (
            <>
              <CurrentWeather data={currentWeatherData} />
              <TenDaysForecast data={weatherData?.daily} />
            </>
          )}
        </div>
        {!isFetchingWeather && (
          <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="order-3 flex h-48 flex-col justify-between lg:order-2">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.25V4.5M18.8944 5.10562L17.3034 6.69656M21.75 12H19.5M4.5 12H2.25M6.69656 6.69656L5.10562 5.10562M12 21.75V16.5M12 21.75C12.5 21.75 13.5 20.25 13.5 20.25M12 21.75C11.5 21.75 10.5 20.25 10.5 20.25"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                  Sunset
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {formatSunTime(
                    weatherData?.current?.sunset,
                    weatherData?.timezone_offset,
                  )}
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.25V4.5M12 16.5C12 18.5503 12 21.75 12 21.75M12 16.5C11.5 16.5 10.5 18 10.5 18M12 16.5C12.5 16.5 13.5 18 13.5 18M18.8944 5.10562L17.3034 6.69656M21.75 12H19.5M4.5 12H2.25M6.69656 6.69656L5.10562 5.10562"
                    stroke="black"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12"
                    stroke="black"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </svg>
                Sunrise:
                {formatSunTime(
                  weatherData?.current?.sunrise,
                  weatherData?.timezone_offset,
                )}
              </CardFooter>
            </Card>
            <Card className="order-4 h-48 xl:order-3">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 12H20.25C21.75 12 23.25 10.6569 23.25 9C23.25 7.34315 21.9069 6 20.25 6C18.8521 6 17.6775 6.95608 17.3445 8.25"
                      stroke="black"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.25 15L17.25 15C18.4926 15 19.5 16.0074 19.5 17.25C19.5 18.4926 18.4926 19.5 17.25 19.5C16.2703 19.5 15.4369 18.8739 15.128 18"
                      stroke="black"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.25 9L11.25 9C12.4926 9 13.5 7.99264 13.5 6.75C13.5 5.50736 12.4926 4.5 11.25 4.5C10.2703 4.5 9.43691 5.12611 9.12803 6"
                      stroke="black"
                      stroke-linecap="round"
                    />
                  </svg>
                  Wind
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center p-0">
                {/* <Compass speed={data.wind.speed} deg={data.wind.deg} /> */}
              </CardContent>
            </Card>
            <Card className="order-5 flex h-48 flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.25V3.375M12 21.75V20.625M17.3034 6.69656L18.0989 5.90109M6.69656 17.3034L5.90109 18.0989M21.75 12H20.625M2.25 12H3.375M17.3034 17.3034L18.0989 18.0989M6.69656 6.69656L5.90109 5.90109"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                  UV Index
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  {Math.round(weatherData?.daily[0].uvi * 10)}
                  <br></br>
                  {weatherData?.daily[0].uvi * 10 <= 2
                    ? "Low"
                    : weatherData?.daily[0].uvi * 10 <= 5
                      ? "Moderate"
                      : weatherData?.daily[0].uvi * 10 <= 7
                        ? "High"
                        : "Very High"}
                </p>
                {/* <Progress aria-label="UV Index" value={weatherData?.daily[0].uvi * 10} /> */}
              </CardContent>
              <CardFooter>
                <p>
                  {weatherData?.daily[0].uvi <= 2
                    ? "No protection needed."
                    : weatherData?.daily[0].uvi <= 5
                      ? "Wear sunscreen."
                      : "Take precautions."}
                </p>
              </CardFooter>
            </Card>
            <Card className="order-6 flex h-48 flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.75 6.64331V11.0372H17.0227"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.7499 3.23809V1.81006H12.6287H10.8711M15.265 4.00703L16.034 3.23809"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.75 3.56763C10.3161 3.56763 8.91437 3.99283 7.72212 4.78947C6.52986 5.58611 5.60061 6.71841 5.05188 8.04317C4.50314 9.36794 4.35957 10.8257 4.63931 12.232C4.91905 13.6384 5.60955 14.9302 6.62348 15.9441C7.63741 16.9581 8.92924 17.6486 10.3356 17.9283C11.742 18.2081 13.1997 18.0645 14.5245 17.5158C15.8492 16.967 16.9815 16.0378 17.7782 14.8455C18.5748 13.6533 19 12.2515 19 10.8176C19 8.89481 18.2362 7.05074 16.8765 5.6911C15.5169 4.33146 13.6728 3.56763 11.75 3.56763Z"
                      stroke="black"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16.125 18.9401L15 21.1901"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.125 19.9401L11 22.1901"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.75 18.9401L8 20.4401"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.125 17.9401L4 20.1901"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19.75 17.9401L19 19.4401"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                  Precipitation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {weatherData.current?.rain?.["1h"] || 0}mm <br></br>in the
                  last 1h
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  {weatherData.current?.rain?.["1h"] !== undefined
                    ? weatherData.current?.rain?.["1h"] <= 0.2
                      ? "Light rain or drizzle. An umbrella may come in handy."
                      : weatherData.current?.rain?.["1h"] <= 2.5
                        ? "Moderate rain."
                        : "Heavy rain."
                    : "Conditions are dry."}
                </p>
              </CardFooter>
            </Card>
            <Card className="order-7 flex h-48 flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 18V11.625V10.4375M14.4243 14.1689C14.3709 14.1351 14.327 14.0884 14.2965 14.0331C14.266 13.9778 14.25 13.9157 14.2499 13.8525V3.75C14.2499 3.15326 14.0128 2.58097 13.5909 2.15901C13.1689 1.73705 12.5966 1.5 11.9999 1.5C11.4032 1.5 10.8309 1.73705 10.4089 2.15901C9.98695 2.58097 9.7499 3.15326 9.7499 3.75V13.8525C9.7498 13.9155 9.73381 13.9775 9.70342 14.0327C9.67302 14.088 9.62919 14.1346 9.57599 14.1684C8.90953 14.6026 8.36789 15.2031 8.00461 15.9107C7.64133 16.6183 7.46897 17.4084 7.50458 18.203C7.55822 19.3772 8.06921 20.4839 8.92826 21.2863C9.78731 22.0886 10.9262 22.523 12.1014 22.4965C13.2766 22.47 14.3948 21.9847 15.2167 21.1444C16.0387 20.3041 16.4993 19.1755 16.4999 18C16.5002 17.2391 16.3105 16.4902 15.9481 15.8211C15.5856 15.1521 15.0618 14.5842 14.4243 14.1689Z"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 20.25C13.2426 20.25 14.25 19.2426 14.25 18C14.25 16.7574 13.2426 15.75 12 15.75C10.7574 15.75 9.75 16.7574 9.75 18C9.75 19.2426 10.7574 20.25 12 20.25Z"
                      fill="black"
                    />
                  </svg>
                  Feels like
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{Math.floor(weatherData?.current?.feels_like)}&deg;</p>
              </CardContent>
              <CardFooter>
                <p>
                  {weatherData?.current?.feels_like < weatherData?.current?.temp
                    ? "Feels colder than the actual temperature."
                    : weatherData?.current?.feels_like >
                        weatherData?.current?.temp
                      ? "Feels warmer than the actual temperature."
                      : "Feels like the actual temperature."}
                </p>
              </CardFooter>
            </Card>
            <Card className="order-8 flex h-48 flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.75 15C18.75 19.1423 16.1423 21.75 12 21.75C7.85766 21.75 5.25 19.1423 5.25 15C5.25 10.5548 10.0889 4.55389 11.573 2.8181C11.6258 2.75643 11.6913 2.70693 11.7651 2.67298C11.8388 2.63904 11.919 2.62146 12.0002 2.62146C12.0814 2.62146 12.1617 2.63904 12.2354 2.67298C12.3092 2.70693 12.3747 2.75643 12.4275 2.8181C13.9111 4.55389 18.75 10.5548 18.75 15Z"
                      stroke="black"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16.125 15.375C16.125 16.2701 15.7694 17.1285 15.1365 17.7615C14.5035 18.3944 13.6451 18.75 12.75 18.75"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Humidity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{weatherData?.current?.humidity}&deg;</p>
              </CardContent>
              <CardFooter>
                <p>
                  {weatherData?.current?.humidity < 40
                    ? "Low humidity. It might feel dry."
                    : weatherData?.current?.humidity < 70
                      ? "Moderate humidity. Comfortable conditions."
                      : "High humidity. It might feel humid and uncomfortable."}
                </p>
              </CardFooter>
            </Card>
            <Card className="order-9 flex h-48 flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9841 5.25C8.33067 5.25 4.58301 7.36453 1.6327 11.5936C1.54849 11.7156 1.50234 11.8599 1.50009 12.0082C1.49783 12.1564 1.53958 12.302 1.62004 12.4266C3.88692 15.975 7.58442 18.75 11.9841 18.75C16.336 18.75 20.1094 15.9666 22.3805 12.4102C22.4591 12.2881 22.5009 12.1459 22.5009 12.0007C22.5009 11.8555 22.4591 11.7134 22.3805 11.5912C20.1043 8.07562 16.3032 5.25 11.9841 5.25Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                      stroke="black"
                      stroke-miterlimit="10"
                    />
                  </svg>
                  Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{weatherData?.current?.visibility / 1000} km</p>
              </CardContent>
              <CardFooter>
                <p>
                  {weatherData?.current?.visibility / 10 >= 10
                    ? "It's perfectly clear right now."
                    : weatherData?.current?.visibility / 10 >= 5
                      ? "Good visibility."
                      : "Poor visibility. Exercise caution while driving or moving around."}
                </p>
              </CardFooter>
            </Card>
            <Card className="order-10 flex h-48 flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2858 10.8703L13.0593 14.4094C12.9682 14.5356 12.8574 14.6464 12.7312 14.7375C12.4264 14.9501 12.0501 15.034 11.6838 14.9708C11.3176 14.9077 10.9911 14.7027 10.7751 14.4003C10.5591 14.0979 10.4711 13.7225 10.5301 13.3557C10.5892 12.9888 10.7906 12.66 11.0905 12.4406L14.6296 10.2141C14.71 10.158 14.8058 10.1279 14.9038 10.1279C15.0019 10.1279 15.0976 10.158 15.178 10.2141C15.2791 10.287 15.3471 10.397 15.3673 10.52C15.3875 10.6429 15.3582 10.7689 15.2858 10.8703Z"
                      fill="black"
                    />
                    <path
                      d="M12 3C6.20157 3 1.50001 7.69687 1.50001 13.4953C1.49645 16.0607 2.43565 18.538 4.13907 20.4562C4.19063 20.5125 4.23751 20.5687 4.28907 20.6203C4.4 20.7404 4.53465 20.8361 4.68451 20.9015C4.83436 20.9668 4.99615 21.0003 5.15963 20.9999C5.32311 20.9995 5.48472 20.9651 5.63422 20.8989C5.78372 20.8328 5.91786 20.7363 6.02813 20.6156C6.78822 19.7896 7.71139 19.1303 8.7393 18.6793C9.76721 18.2282 10.8775 17.9954 12 17.9954C13.1225 17.9954 14.2328 18.2282 15.2607 18.6793C16.2886 19.1303 17.2118 19.7896 17.9719 20.6156C18.0822 20.7363 18.2163 20.8328 18.3658 20.8989C18.5153 20.9651 18.6769 20.9995 18.8404 20.9999C19.0039 21.0003 19.1657 20.9668 19.3155 20.9015C19.4654 20.8361 19.6 20.7404 19.7109 20.6203L19.8609 20.4562C21.5644 18.538 22.5036 16.0607 22.5 13.4953C22.5 7.69687 17.7984 3 12 3Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 6V7.5M19.5 13.5H18M6 13.5H4.5M7.75734 9.25734L6.69656 8.19656M16.2427 9.25734L17.3034 8.19656"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                  Pressure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{weatherData?.current?.pressure} hPa</p>
              </CardContent>
              <CardFooter>
                <p>
                  {weatherData?.current?.pressure < 1000
                    ? "Low pressure. Expect changes in the weather."
                    : weatherData?.current?.pressure >= 1000 &&
                        weatherData?.current?.pressure <= 1010
                      ? "Normal pressure. Typical weather conditions."
                      : "High pressure. Expect stable and clear weather."}
                </p>
              </CardFooter>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
