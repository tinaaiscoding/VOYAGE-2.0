import AddDestinationForm from '../../../components/AddDestinationForm/AddDestinationForm';
// import AddDestinationList from './AddDestinationList';

import './AddDestination.scss';

const AddDestination = (props) => {
  return (
    <div id="AddDestination" className='add-destination-grid'>
      <AddDestinationForm />
    </div>
  );
};

export default AddDestination;
