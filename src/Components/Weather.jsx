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
      <CityInfo data={data} />
      <WeatherInfo data={data} />
    </>
  );
};

export default Weather;
