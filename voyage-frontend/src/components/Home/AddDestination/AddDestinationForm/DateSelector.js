import { today, next365Days } from '../../../../date.js';

import './AddDestinationForm.scss'

const DateSelector = (props) => {
  return (
    <div className="Date-Selector">
      <p>DATES</p>
      <label>FROM</label>
      <input
        type="date"
        min={today}
        onChange={props.onDateFromChange}
        value={props.destinationData.dateFrom}
        required
      />
      <label>TO</label>
      <input
        type="date"
        min={props.destinationData.dateFrom}
        max={next365Days}
        onChange={props.onDateToChange}
        value={props.destinationData.dateTo}
        required
      />
    </div>
  );
};

export default DateSelector;
