import { useContext, useState } from 'react';
import { DestinationContext } from '../Home/DestinationContext';

import { fetchWeatherData } from '../../utils/fetchWeather';
import WeatherInformation from '../../components/WeatherInformation/WeatherInformation';
import ItineraryDesList from './ItineraryDesList';
import AddDestinationForm from '../../components/AddDestinationForm/AddDestinationForm';

import './Itinerary.scss';

const Itinerary = (props) => {
  const { destinationList, setDestinationList } =
    useContext(DestinationContext);
  const [citySelected, setCitySelected] = useState({});
  const [cityWeatherData, setCityWeatherData] = useState([]);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [fetching, setFetching] = useState(false);

  const fetchWeatherDataHandler = (event) => {
    setCityWeatherData([]);
    setFetching(true);
    fetchWeatherData(event, setCityWeatherData, setCitySelected);
  };

  const deleteCityHandler = (indexOfCity) => {
    const remainingCities = destinationList.filter(
      (city, i) => i !== indexOfCity
    );

    setDestinationList(remainingCities);
  };

  const renderEditModalHandler = (indexOfCity) => {
    setCitySelected((prevState) => {
      return {
        ...prevState,
        index: indexOfCity,
      };
    });
    setDisplayEditModal(true);
  };

  const closeEditModalHandler = () => {
    setDisplayEditModal(false);
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
          renderEditModalHandler={renderEditModalHandler}
          deleteCityHandler={deleteCityHandler}
          displayEditModal={displayEditModal}
          citySelected={citySelected}
          closeEditModalHandler={closeEditModalHandler}
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
