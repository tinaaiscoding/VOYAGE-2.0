import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

import logo from '../../assets/images/voyage-logo.png';

const NavBar = (props) => {
  return (
    <nav id="nav-bar">
      <img className="logo" src={logo} alt="voyage-logo" />

      <div>
        <Link to="/">HOME</Link>
        {/* <Link to="/add-destination">ADD DESTINATION</Link> */}
        <Link to="/itinerary">ITINERARY</Link>
        {/* <Link to="/map">MAP</Link> */}
        <Link to="/packinglist">PACKING LIST</Link>
      </div>

      <button className="button-17" onClick={props.renderSignUpModalHandler}>
        SIGN UP
      </button>
    </nav>
  );
};

export default NavBar;
