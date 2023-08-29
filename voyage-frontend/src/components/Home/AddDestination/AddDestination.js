import AddDestinationForm from './AddDestinationForm/AddDestinationForm';
import AddDestinationList from './AddDestinationList';

import './AddDestination.scss';

const AddDestination = (props) => {
  return (
    <div className="Add-Destination add-destination-grid">
      <div className="add-destination-header">
        <h1>ADD DESTINATION</h1>
      </div>

      <AddDestinationForm />
      <AddDestinationList />
    </div>
  );
};

export default AddDestination;
