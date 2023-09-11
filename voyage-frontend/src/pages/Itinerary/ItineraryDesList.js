import React, { useContext } from 'react';
import { DestinationContext } from '../Home/DestinationContext';

import EditCityModal from './EditCityModal/EditCityModal';

const ItineraryDesList = (props) => {
  const { destinationList } = useContext(DestinationContext);

  return (
    <div className="Itinerary-Des-List">
      <div className="header">
        <h2>DESTINATION</h2>
        {/* <button>SORT BY DATE</button> */}
      </div>

      <div className="content">
        {destinationList.map(
          (destination, index) =>
            Object.keys(destination).length > 0 && (
              <div key={index} className="destination-list-item">
                <p onClick={props.fetchWeatherDataHandler}>
                  {destination.city}, {destination.state}, {destination.country}
                </p>
                <div className="dates">
                  <p>{destination.dateFrom}</p>
                  <p>{destination.dateTo}</p>
                </div>

                <div className="destination-controls">
                  <span
                    className="material-symbols-outlined"
                    onClick={() => props.renderEditModalHandler(index)}
                  >
                    edit
                  </span>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => props.deleteCityHandler(index)}
                  >
                    delete
                  </span>
                </div>
              </div>
            )
        )}
        {props.displayEditModal && (
          <EditCityModal
            onModalClose={props.closeEditModalHandler}
            index={props.citySelected.index}
          />
        )}
      </div>
    </div>
  );
};

export default ItineraryDesList;
