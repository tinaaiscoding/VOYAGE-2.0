import React from 'react';
import EditCityModal from './EditCityModal/EditCityModal';

const ItineraryDesList = (props) => {
  return (
    <div className="Itinerary-Des-List">
      <div className="header">
        <h2>DESTINATION</h2>
        {/* <button>SORT BY DATE</button> */}
      </div>

      <div className="content">
        {props.destinationList.map(
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
            destinationData={props.destinationData}
            setDestinationData={props.setDestinationData}
            destinationList={props.destinationList}
            setDestinationList={props.setDestinationList}
            index={props.citySelected.index}
            countryList={props.countryList}
            setCountryList={props.setCountryList}
            stateList={props.stateList}
            setStateList={props.setStateList}
            cityList={props.cityList}
            setCityList={props.setCityList}
          />
        )}
      </div>
    </div>
  );
};

export default ItineraryDesList;
