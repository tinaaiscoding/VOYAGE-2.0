import { today, next365Days } from '../../../date.js';

const DateSelector = (props) => {
  return (
    <div className="Date-Selector">
      <p>DATES</p>
      <label>FROM</label>
      <input
        type="date"
        min={today}
        onChange={props.onDateFromChange}
        value={props.selectedDateFrom}
      />
      <label>TO</label>
      <input
        type="date"
        min={props.selectedDateFrom}
        max={next365Days}
        onChange={props.onDateToChange}
        value={props.selectedDateTo}
      />
    </div>
  );
};

export default DateSelector;
