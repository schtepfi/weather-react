import React from "react";

export default function WeatherTemperature(props) {
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}