import { today, next365Days } from '../../utils/date.js';

import './AddDestinationForm.scss';

const DateSelector = ({ destinationData, handleDateChange }) => {

  return (
    <div className="Date-Selector">
      <p>DATES</p>
      <label>FROM</label>
      <input
        name='dateFrom'
        type="date"
        min={today}
        onChange={handleDateChange}
        value={destinationData.dateFrom}
        required
      />
      <label>TO</label>
      <input
        name='dateTo'
        type="date"
        min={destinationData.dateFrom}
        max={next365Days}
        onChange={handleDateChange}
        value={destinationData.dateTo}
        required
      />
    </div>
  );
};

export default DateSelector;
