import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";

const WeatherContext = createContext(null);


export const useWeather = () => {

    return useContext(WeatherContext);
}


export const WeatherProvider = (props) => {

    const [data, Setdata] = useState(null);
    const [searchCity, SetsearchCity] = useState(null);

    const fetchdata = async () => {
        const response = await getWeatherDataForCity(searchCity);
        Setdata(response);

    };



    return (
        <WeatherContext.Provider
            value={{ data, searchCity, SetsearchCity, fetchdata }}>
            {props.children}
        </WeatherContext.Provider>
    );
};