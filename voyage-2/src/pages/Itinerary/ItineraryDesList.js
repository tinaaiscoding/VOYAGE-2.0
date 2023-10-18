import React, { useContext, useState } from 'react';
import { DestinationContext } from '../Home/DestinationContext';

import EditCityModal from '../../components/EditCityModal/EditCityModal';

const ItineraryDesList = ({
  citySelected,
  setCitySelected,
  fetchWeatherDataHandler,
  setFetching,
}) => {
  const { destinationList, setDestinationList } =
    useContext(DestinationContext);

  const [displayEditModal, setDisplayEditModal] = useState(false);

  const handleClearList = () => {
    setDestinationList([]);
    setFetching(false);
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
    <div className="Itinerary-Des-List">
      <div className="header">
        <h2>DESTINATION</h2>
        {/* <button>SORT BY DATE</button> */}
        <button onClick={handleClearList} className="button-80">
          CLEAR LIST
        </button>
      </div>

      <div className="content">
        {destinationList.map(
          (destination, index) =>
            Object.keys(destination).length > 0 && (
              <div key={index} className="destination-list-item">
                <p onClick={fetchWeatherDataHandler}>
                  {destination.city}, {destination.state}, {destination.country}
                </p>
                <div className="dates">
                  <p>{destination.dateFrom}</p>
                  <p>{destination.dateTo}</p>
                </div>

                <div className="destination-controls">
                  <span
                    className="material-symbols-outlined"
                    onClick={() => renderEditModalHandler(index)}
                  >
                    edit
                  </span>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => deleteCityHandler(index)}
                  >
                    delete
                  </span>
                </div>
              </div>
            )
        )}
        {displayEditModal && (
          <EditCityModal
            onModalClose={closeEditModalHandler}
            index={citySelected.index}
          />
        )}
      </div>
    </div>
  );
};

export default ItineraryDesList;
