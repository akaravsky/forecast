import axios from 'axios';

const API_KEY = '080a4a5a99e80bd29c3922ec4232f2e3';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	 const url = `${ROOT_URL}&q=${city},ua`;
	 const request = axios.get(url);

	 //console.log('Request:', request)


	return ({
		type: FETCH_WEATHER,
		payload: request
	});
}