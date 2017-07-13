import axios from 'axios';

const API_KEY = '9b2e8f4ee23383b60a8cd3fe7f5b551f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request: ", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
