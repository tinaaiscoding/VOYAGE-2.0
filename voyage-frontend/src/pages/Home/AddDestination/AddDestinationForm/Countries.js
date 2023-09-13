import { useContext} from 'react';
import { DestinationContext } from '../../DestinationContext';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import './AddDestinationForm.scss';

const Countries = ({ changeHandler }) => {
  const { setCityList, setStateList, countryList } = useContext(DestinationContext);

  const setCountryHandler = (event) => {
    changeHandler(event);
    setStateList([]);
    setCityList([]);
  };

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
