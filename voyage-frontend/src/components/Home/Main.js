import React from 'react';

import './Main.scss'

const Main = (props) => {
  return (
    <div className="main">
      <p>PLAN YOUR NEXT DESTINATION</p>
      <h1>voyage</h1>
      <button className="button-17" onClick={props.renderSignUpModalHandler}>
        LET'S PLAN
      </button>
    </div>
  );
};

export default Main;
