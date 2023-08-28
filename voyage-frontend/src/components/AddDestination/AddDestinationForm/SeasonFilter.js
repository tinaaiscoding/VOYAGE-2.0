import './AddDestinationForm.scss';

const SeasonFilter = (props) => {
  return (
    <div className="SeasonFilter">
      <div className="summer">
        <label>SUMMER</label>
        <label className="toggle-switch">
          <input
            type="checkbox"
            onChange={props.onFilterToggle}
            value="summer"
          />
          <span className="summer slider round"></span>
        </label>
      </div>

      <div className="winter">
        <label>WINTER</label>
        <label className="toggle-switch">
          <input
            type="checkbox"
            onChange={props.onFilterToggle}
            value="winter"
          />
          <span className="winter slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default SeasonFilter;
