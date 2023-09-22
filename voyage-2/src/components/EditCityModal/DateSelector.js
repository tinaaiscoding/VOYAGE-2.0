import { today, next365Days } from '../../utils/date.js';

const DateSelector = (props) => {
  return (
    <div className="Date-Selector">
      <p>DATES</p>
      <label>FROM</label>
      <input
        name="dateFrom"
        type="date"
        min={today}
        onChange={props.changeHandler}
        value={props.selectedDateFrom}
      />
      <label>TO</label>
      <input
        name="dateTo"
        type="date"
        min={props.selectedDateFrom}
        max={next365Days}
        onChange={props.changeHandler}
        value={props.selectedDateTo}
      />
    </div>
  );
};

export default DateSelector;
