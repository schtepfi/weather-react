import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header">
          <h1>Weather Channel</h1>
          <Weather />
          <br />
          <div class="footer">
            <a href="https://github.com/schtepfi/weather-react" target="_blank">
              Open-source code </a
            >, by Stephanie Schlaepfer
        </div>
        </header>
      </div>
    </div >
  );
}

export default App;