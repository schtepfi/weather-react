import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

  function maxTemperature() {
    let temperature = Math.round(props.data[0].temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data[0].temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForcast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="WeatherForcast-temperatures">
        <span className="WeatherForcast-temperature-max"> {maxTemperature} </span>
        <span className="WeatherForcast-temperature-min"> {minTemperature} </span>
      </div>
    </div>
  );
}