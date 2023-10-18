import React from 'react';

import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const GeoapifyAutocomplete = ({ onPlaceSelect }) => {
  return (
    <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_KEY}>
      <GeoapifyGeocoderAutocomplete
        placeholder="Enter city here"
        type="city"
        lang="en"
        limit={5}
        placeSelect={onPlaceSelect}
      />
    </GeoapifyContext>
  );
};

export default GeoapifyAutocomplete;
