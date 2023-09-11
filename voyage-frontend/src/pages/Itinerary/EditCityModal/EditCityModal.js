import { useContext, useEffect, useState } from 'react';
import { DestinationContext } from '../../Home/DestinationContext';

import Modal from '../../../components/UI/Modal';
import Countries from './Countries';
import States from './States';
import Cities from './Cities';
import DateSelector from './DateSelector';

import './EditCityModal.scss';

const EditCityModal = (props) => {
  const {
    destinationList,
    setDestinationList,
    countryList,
    stateList,
    cityList,
  } = useContext(DestinationContext);

  const [editData, setEditData] = useState(destinationList[props.index]);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [stateCode, setStateCode] = useState(initialStateCode);
  const [editStateList, setEditStateList] = useState(stateList);
  const [editCityList, setEditCityList] = useState(cityList);

  let initialCountryCode = '';
  let initialStateCode = '';

  countryList.forEach((countryItem) => {
    if (countryItem.name === destinationList[props.index].country) {
      initialCountryCode = countryItem.iso2;
    }
  });

  stateList.forEach((stateItem) => {
    if (stateItem.name === destinationList[props.index].state) {
      initialStateCode = stateItem.iso2;
    }
  });

  const countryChangeHandler = (country) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        country: country,
      };
    });

    countryList.forEach((countryItem) => {
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
    setEditData((prevState) => {
      return {
        ...prevState,
        state: state,
      };
    });
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

    destinationList.splice(props.index, 1, editData);

    setDestinationList(destinationList);
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
          />
          <States
            onSelectState={stateChangeHandler}
            selectedState={editData.state}
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
