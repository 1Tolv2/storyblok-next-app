import React, { useEffect, useState } from "react";

const WeatherWidget = ({ blok }) => {
  const [weather, setWeather] = useState(null);

  const getGeoData = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=stockholm,se&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) =>
        getWeatherData({ latitude: data[0].lat, longitude: data[0].lon })
      );
  };

  const getWeatherData = ({ latitude, longitude }) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };

  useEffect(() => {
    getGeoData();
  }, []);
  return (
    <div>
      <h2>Current weather</h2>
      {weather && (
        <div style={{ display: "flex" }}>
          <div>
            <h3>Stockholm</h3>
            <p>{weather.weather[0].description} { Math.round(weather.main.temp)}°</p>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
