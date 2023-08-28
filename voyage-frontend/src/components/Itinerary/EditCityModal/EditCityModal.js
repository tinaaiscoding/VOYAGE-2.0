import { useState, useEffect } from 'react';
import Modal from '../../UI/Modal';
import Countries from './Countries';
import States from './States';
import Cities from './Cities';
import DateSelector from './DateSelector';
import fetchStates from '../../../db/fetchStates';

import './EditCityModal.scss';

const EditCityModal = (props) => {
  let initialCountryCode = '';
  props.countryList.forEach((countryItem) => {
    if (countryItem.name === props.destinationList[props.index].country) {
      initialCountryCode = countryItem.iso2;
    }
  });

  let initialStateCode = '';
  props.stateList.forEach((stateItem) => {
    if (stateItem.name === props.destinationList[props.index].state) {
      initialStateCode = stateItem.iso2;
    }
  });

  const [editData, setEditData] = useState(props.destinationList[props.index]);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [stateCode, setStateCode] = useState(initialStateCode);
  const [editStateList, setEditStateList] = useState(props.stateList);
  const [editCityList, setEditCityList] = useState(props.cityList);

  const countryChangeHandler = (country) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        country: country,
      };
    });

    props.countryList.forEach((countryItem) => {
      if (countryItem.name === country) {
        setCountryCode(countryItem.iso2);
        setEditData((prevState) => {
          return {
            ...prevState,
          };
        });

        setStateCode('');
      }
    });
  };
  const stateChangeHandler = (state) => {
    console.log('STATE CHANGED');
    setEditData((prevState) => {
      return {
        ...prevState,
        state: state,
      };
    });

    console.log(editData);
  };

  const cityChangeHandler = (city) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        city: city,
      };
    });
  };

  const dateFromChangeHandler = (event) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        dateFrom: event.target.value,
      };
    });
  };

  const dateToChangeHandler = (event) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        dateTo: event.target.value,
      };
    });
  };

  const editHandler = (event) => {
    event.preventDefault();

    props.destinationList.splice(props.index, 1, editData);

    props.setDestinationList(props.destinationList);
    props.onModalClose();
  };

  useEffect(() => {
    editStateList.forEach((stateItem) => {
      if (stateItem.name === editData.state) {
        setStateCode(stateItem.iso2);
      }
    });
  }, [editData]);

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
            onSelectedCountry={countryChangeHandler}
            selectedCountry={editData.country}
            countryList={props.countryList}
            setCountryList={props.setCountryList}
          />
          <States
            onSelectState={stateChangeHandler}
            selectedState={editData.state}
            stateList={props.stateList}
            countryCode={countryCode}
            editStateList={editStateList}
            setEditStateList={setEditStateList}
          />
          <Cities
            onSelectCity={cityChangeHandler}
            selectedCity={editData.city}
            editData={editData}
            countryCode={countryCode}
            stateCode={stateCode}
            editCityList={editCityList}
            setEditCityList={setEditCityList}
          />
          <DateSelector
            onDateFromChange={dateFromChangeHandler}
            onDateToChange={dateToChangeHandler}
            destinationData={props.destinationData}
            setDestinationData={props.setDestinationData}
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
