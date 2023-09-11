import AddDestinationForm from './AddDestinationForm/AddDestinationForm';
import AddDestinationList from './AddDestinationList';

import './AddDestination.scss';

const AddDestination = (props) => {
  return (
    <div id="AddDestination" className='add-destination-grid'>
      <AddDestinationForm />
      <AddDestinationList />
    </div>
  );
};

export default AddDestination;
