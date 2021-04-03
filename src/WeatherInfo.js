import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="float-right">
            <ul>
              <li>💦 Humidity: {props.data.humidity}%</li>
              <li>💨 Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <p>The Weather is Sunny and nice</p>
      <h2 className="future">The Future</h2>
    </div >
  );
}