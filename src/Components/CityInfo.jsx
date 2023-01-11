const CityInfo = ({ data }) => {
  return (
    <div className="top-content">
      <h1 className="temp">{data ? data.main.temp + "°" : "-"}</h1>
      <h1 className="cityName">
        {data ? data.name + ", " + data.sys.country : " "}
      </h1>
      <h1 className="description">
        {data
          ? data.weather[0].main + " (" + data.weather[0].description + ")"
          : " "}
      </h1>
    </div>
  );
};

export default CityInfo;
