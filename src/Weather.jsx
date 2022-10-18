import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [location, setLocation] = useState();
  const [units, setUnits] = useState();
  const [data, setData] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`;

  const searchWeather = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });

      if (units === "standard") {
        const unit = "K";
      }
      setLocation("");
    }
  };

  return (
    <>
      <div className="searchBar">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchWeather}
          placeholder="Search cities"
          type="text"
        />
        <select
          value={units}
          onChange={(event) => setUnits(event.target.value)}
        >
          <option value="standard">Kelvin</option>
          <option value="imperial">Farenheit</option>
          <option value="metric">Celsius</option>
        </select>
      </div>
      <div className="top-content">
        <h1 className="temp">{data ? data.main.temp + "°" : "-"}</h1>
        <h1 className="cityName">{data ? data.name : " "}</h1>
        <h1 className="description">
          {data
            ? data.weather[0].main + " (" + data.weather[0].description + ")"
            : " "}
        </h1>
      </div>
      <div className="bottom-content">
        <div className="details">
          <h1 className="feelslike">Feels Like</h1>
          <h1>{data ? data.main.feels_like + "°" : "-"}</h1>
          <h1 className="humidity">Humidity</h1>
          <h1>{data ? data.main.humidity + "%" : "-"}</h1>
          <h1 className="windspeed">Wind Speed</h1>
          <h1>{data ? data.wind.speed : "-"}</h1>
        </div>

        <div className="temps">
          <h1 className="maxtemp">Max Temp</h1>
          <h1>{data ? data.main.temp_max + "°" : "-"}</h1>

          <h1 className="mintemp">Min Temp</h1>
          <h1>{data ? data.main.temp_min + "°" : "-"}</h1>
        </div>
      </div>
    </>
  );
};

export default Weather;
