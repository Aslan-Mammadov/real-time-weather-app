import React, { useState } from "react";
import axios from "axios";
import {
  dateYear,
  dateMonth,
  dateWeek,
  dateDay,
  kelvinToF,
} from "../services/constants";

function Weather() {
  const [search, setSearch] = useState("london");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const handleClick = () => {
    setError("");

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=92f58b8d29e5240f313467eab70b0b56`
      )
      .then((response) => {
        console.log(response);
        setWeather({
          City: response.data.name,
          Temperature: kelvinToF(response.data.main.temp),
          Sky: response.data.weather[0].description,
          Wind: response.data.wind.speed,
          Humidity: response.data.main.humidity,
          Status: response.status,
        });
      })

      .catch((err) => setError(err.response.data.message));
  };

  return (
    <div className="container">
      <div className="search">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          type="text"
          className="search-box"
        />
        <button onClick={handleClick}>Search</button>
      </div>

      {error && <h2 className="error-message text-warning">{error}</h2>}
      <div className=" weather-container">
        {weather.City && <h1>{weather.Temperature}&#176;</h1>}
        <div className="city-info">
          <h2> {weather.City}</h2>
          {weather.City && (
            <span>
              {dateWeek} {dateMonth} {dateDay} {dateYear}
            </span>
          )}
        </div>
        <h3>{weather.Sky}</h3>
      </div>

      {weather.Status && (
        <div className="extra-info">
          <h3>Wind Speed: {weather.Wind} MPH</h3>{" "}
          <h3>Humidity: {weather.Humidity}%</h3>
        </div>
      )}
    </div>
  );
}

export default Weather;
