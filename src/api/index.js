const BaseURL = "http://api.weatherapi.com/v1/current.json?key=212dbd7274954d1bbf8153809242607";


export const getWeatherDataForCity = async (city) => {

    const response = await fetch(`${BaseURL}&q=${city}&aqi=yes`);


    return await response.json();


};