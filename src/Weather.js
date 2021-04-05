import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    const [unit, setUnit] = useState("celsius");

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
                        <div className="col-10">
                            <input
                                type="search"
                                placeholder="Enter a city..."
                                className="form-control form-control-lg mb-4"
                                autofocus="on"
                                autocomplete="off"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-2">
                            <input type="submit" value="🔍" className="button" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
                <WeatherForecast coordinates={weatherData.coordinates} unit={unit} />
            </div>
        );
    } else {
        search();
        return "Please give us a moment while the page is loading...";
    }
}