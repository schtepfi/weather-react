import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="currentLocation">📍 {props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={48} />
            </div>

            <div className="float-left">
              <WeatherTemperature
                celsius={props.data.temperature}
                unit={props.unit}
                setUnit={props.setUnit}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="float-right">
            <ul>
              <li>💦 Humidity: {Math.round(props.data.humidity)}%</li>
              <li>💨 Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="WeatherDescription">
        <li className="text-capitalize">{props.data.description}</li>
      </div>
      <h2 className="future">The Future</h2>
    </div>
  );
}