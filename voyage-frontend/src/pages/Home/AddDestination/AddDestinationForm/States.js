import { useContext, useEffect } from 'react';
import { DestinationContext } from '../../DestinationContext';

import fetchStates from '../../../../services/statesAPI';

const States = (props) => {
  const { destinationData, stateList, setStateList } =
    useContext(DestinationContext);

  useEffect(() => {
    fetchStates(props.countryCode).then((res) => {
      setStateList(res);
    });
  }, [props.countryCode]);

  const storeStateHandler = (event) => {
    const stateSelected = event.target.value;

    props.onSelectState(stateSelected);
  };

  return (
    <div className="States">
      <select
        name="state"
        form="Add-Destination-Form"
        onChange={storeStateHandler}
        value={destinationData.state}
        required
      >
        <option value="" disabled hidden>
          State
        </option>
        {stateList.length > 0 &&
          stateList.map((state, index) => {
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
