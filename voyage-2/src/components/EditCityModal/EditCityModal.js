import { useContext, useEffect, useState } from 'react';
import { DestinationContext } from '../../pages/Home/DestinationContext';

import Modal from '../../components/UI/Modal';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import DateSelector from './DateSelector';

import './EditCityModal.scss';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const EditCityModal = ({ index, onModalClose }) => {
  const { destinationList, setDestinationList } =
    useContext(DestinationContext);

  const [editData, setEditData] = useState(destinationList[index]);

  const changeHandler = (event) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const editHandler = (event) => {
    event.preventDefault();

    destinationList.splice(index, 1, editData);

    setDestinationList(destinationList);
    onModalClose();
  };

  const handlePlaceSelect = (value) => {
    console.log('Search section: ', value);
  };

  console.log('edit data', editData)

  return (
    <Modal id="Edit-City-Modal">
      <span className="material-symbols-outlined" onClick={onModalClose}>
        close
      </span>
      <div className="header">
        <h2>Edit City</h2>
      </div>

      <div className="content">
        <form className="Edit-Destination-Form" onSubmit={editHandler}>
        <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_KEY}>
      <GeoapifyGeocoderAutocomplete
        placeholder="Enter city here"
        type="city"
        lang="en"
        limit={5}
        value={`${editData.city}, ${editData.state},${editData.country}`}
        placeSelect={handlePlaceSelect}
      />
    </GeoapifyContext>
          <DateSelector
            changeHandler={changeHandler}
            selectedDateFrom={editData.dateFrom}
            selectedDateTo={editData.dateTo}
          />

          <button type="submit">EDIT</button>
        </form>
      </div>
    </Modal>
  );
};
export default EditCityModal;
