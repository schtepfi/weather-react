import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }


    function search() {
        const apiKey = "c0a2579dbc68074c7c325b759cdecd5c";
        let unit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <h1>Weather Channel</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div class="form-group w-75">
                            <div className="col-10">
                                <input
                                    type="search"
                                    placeholder="Enter a city..."
                                    className="form-control"
                                    autofocus="on"
                                    autocomplete="off"
                                    onChange={handleCityChange}
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-light" />
                        </div>
                    </div>
                </form >
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {
        search();
        return "loading...";
    }
}
