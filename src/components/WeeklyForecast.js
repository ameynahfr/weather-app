import React from "react";

const WeeklyForecast = ({ data }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const iconBaseUrl = "https://openweathermap.org/img/w/";
  return (
    <div>
      <h2 style={{ margin: '0 auto', textAlign: "center" }}>Daily Forecast</h2>
      {data.map((day, index) => (
        <div key={index}>
          <p>
            {daysOfWeek[new Date(day.dt * 1000).getDay()]}
          </p>
          <img
              src={`${iconBaseUrl}${day.weather[0].icon}.png`}
              alt="Weather Icon"
              style={{ width: '50px' }}
            />
          <p>
            Weather: {day.weather[0].description}
          </p>
          <p>
            {Math.round(day.main.temp_max)}°C / {Math.round(day.main.temp_min)}°C
          </p>
          
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
