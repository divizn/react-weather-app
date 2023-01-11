import { useState } from "react";
import axios from "axios";

const SearchBar = ({ getData }) => {
  const [location, setLocation] = useState();
  const [units, setUnits] = useState();
  const [data, setData] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`;

  getData(data);

  const searchWeather = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          if (error.response) alert(error.response.data.message);
          else alert("An unknown error occured, please try again later.");
        });
      setLocation("");
    }
  };

  return (
    <div className="searchBar">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchWeather}
        placeholder="Search cities"
        type="text"
      />
      <select value={units} onChange={(event) => setUnits(event.target.value)}>
        <option value="standard">Kelvin</option>
        <option value="imperial">Farenheit</option>
        <option value="metric">Celsius</option>
      </select>
    </div>
  );
};

export default SearchBar;
