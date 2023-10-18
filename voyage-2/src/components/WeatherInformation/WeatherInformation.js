import React from 'react';
import './WeatherInformation.scss';

const WeatherInformation = ({ cityWeatherData, citySelected }) => {
  return (
    <div className="content">
      {cityWeatherData.length > 0 ? (
        <>
          <h4>
            {citySelected.city}, {citySelected.state}, {citySelected.country}
          </h4>
          <span className="last-year-avg-temp">
            {(
              cityWeatherData.reduce((a, b) => a + b, 0) /
              cityWeatherData.length
            ).toFixed(2)}{' '}
            °C
          </span>
          <h4>Average weather from</h4>
          <h4>
            {citySelected.dateFrom} - {citySelected.dateTo}
          </h4>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherInformation;
