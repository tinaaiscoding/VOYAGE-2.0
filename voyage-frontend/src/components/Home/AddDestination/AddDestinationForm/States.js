import { useEffect } from 'react';

import fetchStates from '../../../../db/fetchStates';

const States = (props) => {
  useEffect(() => {
    fetchStates(props.selectedCountryCode).then((res) => {
      props.setStateList(res);
    });
  }, [props.selectedCountryCode]);

  const storeStateHandler = (event) => {
    const stateSelected = event.target.value;
    
    props.onSelectState(stateSelected);
  };

  return (
    <div className="States">
      <select
        name="States"
        form="Add-Destination-Form"
        onChange={storeStateHandler}
        value={props.selectedState}
        required
      >
        <option value="" disabled hidden>
          State
        </option>
        {props.stateList.length > 0 &&
          props.stateList.map((state, index) => {
            return (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default States;
