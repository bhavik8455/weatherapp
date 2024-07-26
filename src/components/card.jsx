import React from "react";
import { useWeather } from "../context/Weather";



export const Card = (props) => {

    const weather = useWeather();

    return (
        <div className="card">
            <img src={weather.data?.current?.condition?.icon} />
            <h3>{weather.data?.location.name}</h3>
            {weather.data ? <><h2>{weather.data?.current?.temp_c}.C</h2></> : <>ENTER THE CITY</>}
            <h5>{weather.data?.location?.region}</h5>


        </div>
    );


};