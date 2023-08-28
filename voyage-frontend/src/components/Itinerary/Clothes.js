import React from 'react';

import './Itinerary.scss'
import tshirt from '../../images/clothesIcons/t-shirt1.png'
import poloShirt from '../../images/clothesIcons/polo-shirt1.png'
import hoodie from '../../images/clothesIcons/mens-hoodie1.png'
import trousers from '../../images/clothesIcons/trousers1.png'
import jeans from '../../images/clothesIcons/jeans1.png'
import shorts from '../../images/clothesIcons/shorts1.png'
import trainers from '../../images/clothesIcons/trainers1.png'
import flipFlops from '../../images/clothesIcons/flip-flops1.png'
import baseballCap from '../../images/clothesIcons/baseball-cap1.png'

const Clothes = () => {
  return (
    <div className="Clothes">
      <div className="header">
        <h2>CLOTHES TO PACK</h2>
      </div>

      <div className="content">
        <div className="clothes-grid">
          <img className='img1' src={tshirt} alt="" />
          <img className='img2' src={poloShirt} alt="" />
          <img className='img3' src={hoodie} alt="" />
          <img className='img4' src={trousers} alt="" />
          <img className='img5' src={jeans} alt="" />
          <img className='img6' src={shorts} alt="" />
          <img className='img7' src={trainers} alt="" />
          <img className='img8' src={flipFlops} alt="" />
          <img className='img9' src={baseballCap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clothes;
