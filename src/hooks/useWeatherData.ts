import { useQuery } from "@tanstack/react-query";
import getWeatherData from "@/api/getWeatherData";

export default function useWeatherData(location: { lat: string; lon: string }) {
  const { data: weatherData, isFetching: isFetchingWeather } = useQuery({
    queryKey: ["data", location],
    queryFn: () => getWeatherData(location),
    staleTime: 0,
    gcTime: 0,
    retry: 0,
    enabled: !!location,
  });

  //   return [results?.data ?? [], results.status];
  return {
    weatherData,
    isFetchingWeather,
  };
}
