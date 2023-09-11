import React from 'react';

const AvgWeather = (props) => {
  return (
    <div className="Avg-Weather">
      {Object.keys(props.cityPrevWeatherData).length > 0 ? (
        <div className="Avg-Weather">
          <div className="header">
            <h2>AVERAGE WEATHER</h2>
          </div>

          <div className="content">
            <h4>
              {props.citySelected.city}, {props.citySelected.state}, {props.citySelected.country}
            </h4>
            <span className="last-year-avg-temp">
              {(props.cityPrevWeatherData.reduce((a, b) => a + b, 0) /
                props.cityPrevWeatherData.length).toFixed(2)} °C
            </span>
            <h4>Average weather from</h4>
            <h4>
              {props.citySelected.dateFrom} - {props.citySelected.dateTo}
            </h4>
          </div>
        </div>
      ) : (
        <div className="Avg-Weather">
          <div className="header">
            <h2>AVERAGE WEATHER</h2>
          </div>

          <div className="content">
            {' '}
            <p>Click on a city name!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvgWeather;
