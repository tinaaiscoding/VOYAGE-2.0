import React from 'react';

import './Categories.scss';
import beach from '../../../assets/images/destinations/beach.jpeg';
import hiking from '../../../assets/images/destinations/hiking.webp';
import family from '../../../assets/images/destinations/family.jpeg';

const Categories = () => {
  return (
    <div id="Categories">
      <h1>Categories</h1>

      <div className="squares">
        <div className="square">
          <img src={beach} alt="" />
        </div>

        <div className="square">
          <img src={hiking} alt="" />
        </div>

        <div className="square">
          <img src={family} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
