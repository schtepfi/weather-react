import React, { useState } from "react";
import axios from 'axios';

export default function Search() {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState("");
    const [description, setDescription] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [icon, setIcon] = useState("");

    function showWeather(response) {
        setCity(response.data.name);
        setTemperature(response.data.main.temp);
        setDescription(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setIcon(
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "c0a2579dbc68074c7c325b759cdecd5c";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

        axios.get(apiUrl).then(showWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input
                type="Search"
                placeholder="Enter a city..."
                onChange={updateCity}
            />
            <input type="Submit" value="Search" />
        </form>
    );

    if (description) {
        return (
            <div>
                {form}
                <ul>
                    <li>Temperature: {Math.round(temperature)}ºC</li>
                    <li>Description: {description} </li>
                    <li>Humidity: {Math.round(humidity)}%</li>
                    <li>Wind Speed: {Math.round(wind)} km/h</li>
                    <img src={icon} alt={description} />
                </ul>
                <p>What did one raindrop say to the other? Two's company, three's a cloud.</p>
            </div>
        );
    } else {
        return form;
    }
}
