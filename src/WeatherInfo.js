import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h2 className="currentLocation">{props.data.city}</h2>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                            src={props.data.iconUrl}
                            alt={props.data.description}
                            className="float-left"
                        />
                        <div className="float-left">
                            <span className="currentTemperature">{Math.round(props.data.temperature)}</span>
                            <span className="units">
                                <a href=" ">°C </a> | <a href=" ">°F</a></span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>💦 Humidity: {props.data.humidity}%</li>
                        <li>💨 Wind: {props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
            <p>The Weather is Sunny and nice</p>
            <h2 className="future">The Future</h2>
        </div >
    );
}