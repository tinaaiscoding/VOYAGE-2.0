import { useContext, useEffect, useState } from 'react';
import { DestinationContext } from '../../DestinationContext';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import fetchCities from '../../../../services/citiesAPI';

import './AddDestinationForm.scss';

const Cities = (props) => {
  const { destinationData, cityList, setCityList } =
    useContext(DestinationContext);

  const [city, setCity] = useState('');

  useEffect(() => {
    fetchCities(props.countryCode, props.stateCode).then((res) => {
      setCityList(res);
    });
  }, [props.stateCode]);

  const setCityHandler = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    props.onSelectCity(city);
  }, [city]);

  return (
    <div className="Cities">
      {cityList.length > 0 ? (
        <Autocomplete
          name="city"
          disablePortal
          id="cities"
          options={cityList.map((city) => city.name)}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              name="city"
              label="city"
              onSelect={setCityHandler}
            />
          )}
        />
      ) : (
        <Autocomplete
          disabled
          options={['Please select a state']}
          renderInput={(params) => (
            <TextField {...params} label="Please select a state" />
          )}
        />
      )}
    </div>
  );
};

export default Cities;
