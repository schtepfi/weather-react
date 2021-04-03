import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            date: "Tuesday, 23.03.2021",
        });
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <h1>Weather Channel</h1>
                <form>
                    <div className="row">
                        <div class="form-group w-75">
                            <div className="col-10">
                                <input
                                    type="search"
                                    placeholder="Enter a city..."
                                    className="form-control"
                                    autofocus="on"
                                    autocomplete="off"
                                    id="search-text-input"
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-light" />
                        </div>
                    </div>
                </form >
                <h2 className="currentLocation">{weatherData.city}</h2>
                <ul>
                    <li className="currentDate">{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img
                                src={weatherData.iconUrl}
                                alt={weatherData.description}
                                className="float-left"
                            />
                            <div className="float-left">
                                <span className="currentTemperature">{Math.round(weatherData.temperature)}</span>
                                <span className="units">
                                    <a href=" ">°C </a> | <a href=" ">°F</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>💦 Humidity: {weatherData.humidity}%</li>
                            <li>💨 Wind: {weatherData.wind}km/h</li>
                        </ul>
                    </div>
                </div>
                <p>The Weather is Sunny and nice</p>
                <h2 className="future">The Future</h2>
            </div >
        );
    } else {
        const apiKey = "c0a2579dbc68074c7c325b759cdecd5c";
        const unit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(handleResponse);
        return "loading...";
    }
}
