import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Channel</h1>
        <Weather />
        <br />
        <div class="footer">
          <a href="https://github.com/schtepfi/weather-react" target="_blank"
          >Open-source code</a
          >, by Stephanie Schlaepfer
          </div>
      </header>
    </div >
  );
}

export default App;