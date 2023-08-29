import React, { useContext } from 'react';
import { DestinationContext } from '../DestinationContext';

const AddDestinationList = () => {
  const { destinationList } = useContext(DestinationContext);

  return (
    <div className="Add-Destination-List add-destination-card">
      <div className="header">
        <h2>DESTINATIONS</h2>
      </div>
      <div className="content">
        {destinationList.map(
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
