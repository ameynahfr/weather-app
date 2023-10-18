import React from "react";

const WeeklyForecast = ({ data }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div>
      <h2>Daily Forecast</h2>
      {data.map((day, index) => (
        <div key={index}>
          <p>
            Day: {daysOfWeek[new Date(day.dt * 1000).getDay()]}
          </p>
          <p>
            Maximum Temperature: {day.main.temp_max}°C
          </p>
          <p>
            Minimum Temperature: {day.main.temp_min}°C
          </p>
          <p>
            Weather: {day.weather[0].description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
