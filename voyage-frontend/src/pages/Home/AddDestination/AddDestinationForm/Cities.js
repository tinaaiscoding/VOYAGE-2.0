import { useContext } from 'react';
import { DestinationContext } from '../../DestinationContext';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import './AddDestinationForm.scss';

const Cities = ({ changeHandler }) => {
  const { cityList } = useContext(DestinationContext);

  const setCityHandler = (event) => {
    changeHandler(event);
  };

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
        <div>
          <Autocomplete
            disabled
            options={['Please select a state']}
            renderInput={(params) => (
              <TextField {...params} label="Please select a state" />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Cities;
