import axios from 'axios';
const apiKey = "09979d5c76b398b495532bdf896ce821";
const URL_CLIMA = "http://api.openweathermap.org/data/2.5/";
const URL_LOCATION = "http://ip-api.com/json/";

export const getClima =   (location) =>{
   return  axios(URL_CLIMA+"weather?q="+location+"&appid="+apiKey)
}

export const getLocationNow =  () => {
    return  axios(URL_LOCATION)
}

export const getAfterClimas =   (location) =>{
    return  axios(URL_CLIMA+"forecast?q="+location+"&appid="+apiKey)
 }

