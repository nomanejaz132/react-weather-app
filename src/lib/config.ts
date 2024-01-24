import { Location } from "@/lib/types";

export const DEFAULT_LOCATION: Location = {
  city: "Islamabad",
  coordinates: {
    // lat: "33.6844202",
    // lon: "73.04788479999999",

    // berlin
    // lat: "52.52000659999999",
    // lon: "13.404954",

    // dublin
    lat: "53.3498053",
    lon: "-6.2603097",

    //sydney
    // lat: "33.8688197",
    // lon: "151.2092955",
  },
};

export const DEFAULT_SUGGESTIONS = [
  {
    description: "Berlin, Germany",
  },
  {
    description: "Dublin, Ireland",
  },
  {
    description: "Lahore, Pakistan",
  },
  {
    description: "Amsterdam, Netherlands",
  },
  {
    description: "Lisbon, Portugal",
  },
  {
    description: "Istanbul, Turkey",
  },
  {
    description: "Doha, Qatar",
  },
  {
    description: "London, United Kingdom",
  },
];

export const OTHER_LARGE_CITIES = [
  {
    city: "Berlin",
    country: "Germany",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "Dublin",
    country: "Ireland",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "Istanbul",
    country: "Turkey",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "Doha",
    country: "Qatar",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "Singapore",
    country: "Singapore",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "New York",
    country: "United States",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "Shanghai",
    country: "China",
    coord: {
      lat: 31.2222226,
      lon: 121.458069,
    },
  },
  {
    city: "Tokyo",
    country: "Japan",
    coord: {
      lat: 35.6764225,
      lon: 139.650027,
    },
  },
  {
    city: "Sydney",
    country: "Australia",
    coord: {
      lat: -33.8688197,
      lon: 151.2092955,
    },
  },
  {
    city: "São Paulo",
    country: "Brazil",
    coord: {
      lat: -23.5475493,
      lon: -46.6358888,
    },
  },
];
