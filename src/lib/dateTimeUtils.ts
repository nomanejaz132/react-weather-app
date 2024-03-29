export function convertUTCTimeToDay(
  timezone: number,
  dt: number,
  weekdayFormat: "short" | "long",
): string {
  const utc_time = new Date(dt * 1000);
  const local_time = new Date(utc_time.getTime() + timezone * 1000);

  const options = { weekday: weekdayFormat };
  const dateFormatter = new Intl.DateTimeFormat("UTC", options);

  return dateFormatter.format(local_time);
}

export function getDayNameFromTimestamp(timestamp: number): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(timestamp * 1000);
  const dayIndex = date.getUTCDay();
  return days[dayIndex];
}

export function formatSunTime(
  timestamp: number,
  timezoneOffset: number,
): string {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
  return formattedTime;
}
