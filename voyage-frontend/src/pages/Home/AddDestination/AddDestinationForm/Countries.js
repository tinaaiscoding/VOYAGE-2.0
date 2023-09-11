import { useContext, useEffect, useState } from 'react';
import { DestinationContext } from '../../DestinationContext';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import fetchCountries from '../../../../services/countriesAPI';

import './AddDestinationForm.scss';

const Countries = (props) => {
  const { destinationData, countryList, setCountryList } =
    useContext(DestinationContext);

  const [country, setCountry] = useState('');

  useEffect(() => {
    fetchCountries().then((res) => {
      setCountryList(res);
    });
  }, []);

  const setCountryHandler = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    props.onSelectCountry(country);
  }, [country]);

  return (
    <div className="Countries">
      <Autocomplete
        disablePortal
        id="countries"
        options={countryList.map((country) => country.name)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="country"
            label="Country"
            onSelect={setCountryHandler}
          />
        )}
      />
    </div>
  );
};

export default Countries;
