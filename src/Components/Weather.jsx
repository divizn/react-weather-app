import { useState } from "react";
import SearchBar from "./SearchBar";
import CityInfo from "./CityInfo";
import WeatherInfo from "./WeatherInfo";

const Weather = () => {
  const [data, setData] = useState();
  const getData = (data) => {
    setData(data);
  };

  return (
    <>
      <SearchBar getData={getData} />
      <div className="container">
        <CityInfo data={data} />
        <WeatherInfo data={data} />
      </div>
    </>
  );
};

export default Weather;
