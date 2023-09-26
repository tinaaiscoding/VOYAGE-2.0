import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/voyage-logo.png';
import { supabase } from '../../config/supabase';
import { useNavigate } from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({ renderLoginModalHandler, session }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    } else {
      navigate('/');
    }
  };

  return (
    <nav id="nav-bar">
      <img className="logo" src={logo} alt="voyage-logo" />

      <div>
        <Link to="/">HOME</Link>
        <Link to="/itinerary">ITINERARY</Link>
        {session && <Link to="/packinglist">PACKING LIST</Link>}
      </div>

      {session ? (
        <button className="button-17" onClick={handleLogout}>
          LOG OUT
        </button>
      ) : (
        <button className="button-17" onClick={renderLoginModalHandler}>
          LOGIN
        </button>
      )}
    </nav>
  );
};

export default NavBar;
