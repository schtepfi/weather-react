import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h2 className="currentLocation">Bern</h2>
            <ul>
                <li className="currentDate">Tuesday, 23.03.2021</li>
                <li className="weatherDescription">Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="Mostly Cloudy"
                            className="float-left"
                        />
                        <div className="float-left">
                            <span className="currentTemperature">23</span>
                            <span className="units">
                                <a href="#" className="active">°C </a> | <a href="#">°F</a></span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>💦 Humidity: 13%</li>
                        <li>💨 Wind: 5km/h</li>
                    </ul>
                </div>
            </div>
            <p>The Weather is Sunny and nice</p>
            <h2 className="future">The Future</h2>
        </div >
    );
}
