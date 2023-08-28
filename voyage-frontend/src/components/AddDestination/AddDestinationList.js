import React from 'react';

const AddDestinationList = (props) => {
  return (
    <div className="Add-Destination-List add-destination-card">
      <div className="header">
        <h2>DESTINATIONS</h2>
      </div>
      <div className="content">
        {props.destinationList.map(
          (destination, index) =>
            Object.keys(destination).length > 0 && (
              <p key={index}>
                {destination.city}, {destination.state}, {destination.country}
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default AddDestinationList;
