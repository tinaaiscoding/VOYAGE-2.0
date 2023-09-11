import React from 'react';

import './PopularDestinations.scss';
import paris from '../../../assets/images/destinations/paris.jpeg';
import macchuPicchu from '../../../assets/images/destinations/macchu-picchu.jpeg';
import kyoto from '../../../assets/images/destinations/kyoto.jpeg';

const PopularDestinations = () => {
  return (
    <div id="PopularDestinations">
      <h1>Popular Destinations</h1>

      <div className="city">
        <img src={paris} alt="paris" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          ullamcorper morbi tincidunt ornare massa eget.
        </p>
      </div>

      <div className="city">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at ultrices mi tempus imperdiet nulla malesuada. Ultricies mi quis hendrerit dolor magna eget.
        </p>
        <img src={macchuPicchu} alt="macchu-picchu" />
      </div>

      <div className="city">
        <img src={kyoto} alt="kyoto" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          ullamcorper morbi tincidunt ornare massa eget.
        </p>
      </div>
    </div>
  );
};

export default PopularDestinations;
