import type { WeatherResp } from "../interfaces";

const url = "https://api.openweathermap.org/data/2.5/weather";

export const weather = async (lat: number, lon: number) => {
  const params = new URLSearchParams();

  params.append("appid", process.env.Weather ?? "");
  params.append("lat", String(lat));
  params.append("lon", String(lon));
  params.append("units", "metric");
  params.append("lang", "es");

  const resp = await fetch(`${url}?${params.toString()}`);
  const weatherResp: WeatherResp = await resp.json();

  return {
    temp: Math.round(weatherResp.main.temp),
    location: weatherResp.name,
  };
};
