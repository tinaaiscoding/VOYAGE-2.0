import { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

import Main from './Main';
import AddDestination from './AddDestination/AddDestination';
import SignUpModal from './SignUpLoginModal/SignUpModal';

import './Home.scss'

const Home = (props) => {
  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
  };

  return (
    <div className="home">
      <Main renderSignUpModalHandler={renderSignUpModalHandler}/>
     
      <AddDestination
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
      
      {displaySignUpModal && (
        <SignUpModal onModalClose={closeSignUpModalHandler} />
      )}
    
    </div>
  );
};

export default Home;
