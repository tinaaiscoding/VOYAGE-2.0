import { useContext } from 'react';
import { DestinationContext } from '../../DestinationContext';

import { today, next365Days } from '../../../../utils/date.js';

import './AddDestinationForm.scss';

const DateSelector = (props) => {
  const { destinationData } = useContext(DestinationContext);

  return (
    <div className="Date-Selector">
      <p>DATES</p>
      <label>FROM</label>
      <input
        name='dateFrom'
        type="date"
        min={today}
        onChange={props.changeHandler}
        value={destinationData.dateFrom}
        required
      />
      <label>TO</label>
      <input
        name='dateTo'
        type="date"
        min={destinationData.dateFrom}
        max={next365Days}
        onChange={props.changeHandler}
        value={destinationData.dateTo}
        required
      />
    </div>
  );
};

export default DateSelector;
