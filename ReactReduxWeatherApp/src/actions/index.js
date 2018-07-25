import axios from 'axios';
const API_KEY = 'b1dddd93eae4c455822cef1cd3db8ed9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';   //variable that holds our action type

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); //make a get request with our url

    console.log('Request: ', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request        //check notes if you forgot what payload is
    };
}