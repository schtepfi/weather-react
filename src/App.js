import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Bern" />
        <footer>
          <a
            href="https://github.com/schtepfi/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >Open-source code</a>, by Stephanie Schlaepfer
        </footer>
      </div>
    </div>
  );
}

export default App;