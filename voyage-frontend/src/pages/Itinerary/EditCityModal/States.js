import { useEffect } from 'react';

import fetchStates from '../../../services/statesAPI';

const States = (props) => {
  useEffect(() => {
    fetchStates(props.countryCode).then((res) => {
      props.setEditStateList(res);
    });
  }, [props.countryCode]);

  return (
    <div className="States">
      <select
        name="state"
        form="Edit-Form"
        onChange={props.changeHandler}
        value={props.selectedState}
      >
        {props.editStateList.length > 0 &&
          props.editStateList.map((state, index) => {
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
