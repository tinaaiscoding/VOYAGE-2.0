import { useContext, useEffect, useState } from 'react';
import { DestinationContext } from '../../pages/Home/DestinationContext';

import Modal from '../../components/UI/Modal';
import Cities from './Cities';
import Countries from './Countries';
import DateSelector from './DateSelector';
import States from './States';

import './EditCityModal.scss';

const EditCityModal = (props) => {
  const {
    destinationList,
    setDestinationList,
    countryList,
    stateList,
    cityList,
  } = useContext(DestinationContext);

  const [initialCountryCode, setInitialCountryCode] = useState('');
  const [initialStateCode, setInitialStateCode] = useState('');
  const [editData, setEditData] = useState(destinationList[props.index]);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [stateCode, setStateCode] = useState(initialStateCode);
  const [editStateList, setEditStateList] = useState(stateList);
  const [editCityList, setEditCityList] = useState(cityList);

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

    destinationList.splice(props.index, 1, editData);

    setDestinationList(destinationList);
    props.onModalClose();
  };

  useEffect(() => {
    countryList.forEach((countryItem) => {
      if (countryItem.name === destinationList[props.index].country) {
        setInitialCountryCode(countryItem.iso2);
      }
    });

    stateList.forEach((stateItem) => {
      if (stateItem.name === destinationList[props.index].state) {
        setInitialStateCode(stateItem.iso2);
      }
    });
  }, []);

  useEffect(() => {
    countryList.forEach((countryItem) => {
      if (countryItem.name === editData.country) {
        setCountryCode(countryItem.iso2);
        setEditData((prevState) => {
          return {
            ...prevState,
          };
        });
      }
    });
    setStateCode('');
  }, [editData.country]);

  useEffect(() => {
    editStateList.forEach((stateItem) => {
      if (stateItem.name === editData.state) {
        setStateCode(stateItem.iso2);
      }
    });
  }, [editData.state]);

  return (
    <Modal id="Edit-City-Modal">
      <span className="material-symbols-outlined" onClick={props.onModalClose}>
        close
      </span>
      <div className="header">
        <h2>Edit City</h2>
      </div>

      <div className="content">
        <form className="Edit-Destination-Form" onSubmit={editHandler}>
          <Countries
            changeHandler={changeHandler}
            selectedCountry={editData.country}
          />
          <States
            changeHandler={changeHandler}
            selectedState={editData.state}
            countryCode={countryCode}
            editStateList={editStateList}
            setEditStateList={setEditStateList}
          />
          <Cities
            changeHandler={changeHandler}
            selectedCity={editData.city}
            editData={editData}
            countryCode={countryCode}
            stateCode={stateCode}
            editCityList={editCityList}
            setEditCityList={setEditCityList}
          />
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
