import { useQuery } from "@tanstack/react-query";
import { Coordinates } from "@/lib/types";
import getCurrentWeatherData from "@/api/getCurrentWeatherData";

export default function useCurrentWeatherData(location: Coordinates) {
  const { data: currentWeatherData, isFetching: isFetchingCurrentWeather } =
    useQuery({
      queryKey: ["cWData", location],
      queryFn: () => getCurrentWeatherData(location),
      staleTime: 0,
      gcTime: 0,
      retry: 0,
      enabled: !!location,
    });

  return {
    currentWeatherData,
    isFetchingCurrentWeather,
  };
}
