import AddDestinationForm from './AddDestinationForm/AddDestinationForm';
import AddDestinationList from './AddDestinationList';

import './AddDestination.scss';

const AddDestination = (props) => {
  return (
    <div className="Add-Destination add-destination-grid">
      <div className="add-destination-header">
        <h1>ADD DESTINATION</h1>
      </div>

      <AddDestinationForm
        destinationData={props.destinationData}
        setDestinationData={props.setDestinationData}
        destinationList={props.destinationList}
        setDestinationList={props.setDestinationList}
        countryList={props.countryList}
        setCountryList={props.setCountryList}
        stateList={props.stateList}
        setStateList={props.setStateList}
        cityList={props.cityList}
        setCityList={props.setCityList}
      />
      <AddDestinationList
        destinationData={props.destinationData}
        setDestinationData={props.setDestinationData}
        destinationList={props.destinationList}
        setDestinationList={props.setDestinationList}
      />
    </div>
  );
};

export default AddDestination;
