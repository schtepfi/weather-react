import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForcast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="WeatherForcast-temperatures">
        <span className="WeatherForcast-temperature-max"> {maxTemperature()} </span>
        <span className="WeatherForcast-temperature-min"> {minTemperature()} </span>
      </div>
    </div>
  );
}