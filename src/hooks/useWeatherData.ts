import { useQuery } from "@tanstack/react-query";
import { Coordinates } from "@/lib/types";
import getWeatherData from "@/api/getWeatherData";

export default function useWeatherData(location: Coordinates) {
  const { data: weatherData, isFetching: isFetchingWeather } = useQuery({
    queryKey: ["data", location],
    queryFn: () => getWeatherData(location),
    staleTime: 0,
    gcTime: 0,
    retry: 0,
    enabled: !!location,
  });

  return {
    weatherData,
    isFetchingWeather,
  };
}
