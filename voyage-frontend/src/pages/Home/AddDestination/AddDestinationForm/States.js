import { useContext } from 'react';
import { DestinationContext } from '../../DestinationContext';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const States = ({ changeHandler }) => {
  const { setCityList, stateList } = useContext(DestinationContext);

  const setStateHandler = (event) => {
    changeHandler(event);
    setCityList([]);
  };

  return (
    <div className="States">
      {stateList.length > 0 ? (
        <Autocomplete
          disablePortal
          id="states"
          name="state"
          options={stateList.map((state) => state.name)}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              name="state"
              label="state"
              onSelect={setStateHandler}
            />
          )}
        />
      ) : (
        <div>
          <Autocomplete
            disabled
            options={['Please select a country']}
            renderInput={(params) => (
              <TextField {...params} label="Please select a country" />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default States;
