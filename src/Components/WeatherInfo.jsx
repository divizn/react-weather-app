const WeatherInfo = ({ data }) => {
  return (
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
  );
};

export default WeatherInfo;
