import { useContext, useEffect, useState } from 'react';
import { DestinationContext } from '../../DestinationContext';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import fetchStates from '../../../../services/statesAPI';

const States = (props) => {
  const { destinationData, stateList, setStateList } =
    useContext(DestinationContext);

  const [state, setState] = useState('');

  useEffect(() => {
    fetchStates(props.countryCode).then((res) => {
      setStateList(res);
    });
  }, [props.countryCode]);

  const setStateHandler = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    props.onSelectState(state);
  }, [state]);

  return (
    <div className="States">
      {stateList.length > 0 ? (
        <Autocomplete
          disablePortal
          id="states"
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
        <Autocomplete
          disabled
          options={['Please select a country']}
          renderInput={(params) => (
            <TextField {...params} label="Please select a country" />
          )}
        />
      )}
    </div>
  );
};

export default States;
