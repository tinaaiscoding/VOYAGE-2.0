import { useState } from 'react';

import { fetchWeatherData } from '../../utils/fetchWeather';
import WeatherInformation from '../../components/WeatherInformation/WeatherInformation';
import ItineraryDesList from './ItineraryDesList';
import AddDestinationForm from '../../components/AddDestinationForm/AddDestinationForm';

import './Itinerary.scss';

const Itinerary = () => {
  const [citySelected, setCitySelected] = useState({});
  const [cityWeatherData, setCityWeatherData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchWeatherDataHandler = (event) => {
    setCityWeatherData([]);
    setFetching(true);
    fetchWeatherData(event, setCitySelected, setCityWeatherData);
  };

  return (
    <div className="Itinerary itinerary-grid">
      <div className="itinerary-header">
        <h1>ITINERARY</h1>
      </div>

      <div>
        <AddDestinationForm />
      </div>
      <div className="itinerary-destination-list itinerary-card">
        <ItineraryDesList
          citySelected={citySelected}
          setCitySelected={setCitySelected}
          fetchWeatherDataHandler={fetchWeatherDataHandler}
          setFetching={setFetching}
        />
      </div>

      <div className="weather-info itinerary-card">
        <div className="Weather">
          <div className="header">
            <h2>AVERAGE WEATHER</h2>
          </div>
          {fetching ? (
            <WeatherInformation
              cityWeatherData={cityWeatherData}
              citySelected={citySelected}
            />
          ) : (
            <p>Click on city name!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
