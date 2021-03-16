import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`the weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    let apiKey = "c0a2579dbc68074c7c325b759cdecd5c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <h2>
            Hello from Weather
        </h2>
    );
}