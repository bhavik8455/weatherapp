import React from "react";
import { useWeather } from "../context/Weather";
export const Input = () => {

    const weather = useWeather();

    return (

        <input

            className="input"
            placeholder="Search Here"
            value={weather.searchCity}
            onChange={(e) => weather.SetsearchCity(e.target.value)}



        />

    );

};