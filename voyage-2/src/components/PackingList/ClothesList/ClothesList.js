import React from 'react';

const ClothesList = ({ gender }) => {
  const femaleClothingList = [
    'Dresses',
    'Skirts',
    'T-shirts',
    'Tank tops',
    'Blouses',
    'Lightweight pants',
    'Shorts',
    'Jeans',
    'Cardigans',
    'Lightweight jacket',
    'Sneakers',
    'Sandals',
    'Flats',
    'Bathing suit',
    'Leggings',
    'Socks',
    'Underwear',
    'Sun hat',
    'Sunglasses',
    'Scarves',
    'Jewelry',
    'Handbag',
    'Watch',
  ];

  const maleClothingList = [
    'T-shirts',
    'Shorts',
    'Lightweight pants',
    'Casual shirts',
    'Polo shirts',
    'Jeans',
    'Lightweight jacket',
    'Sneakers',
    'Sandals',
    'Belt',
    'Socks',
    'Underwear',
    'Swim trunks',
    'Sun hat',
    'Sunglasses',
    'Casual shoes',
    'Bathing suit',
    'Watch',
    'Baseball cap',
    'Tank tops',
  ];

  return (
    <div>
      <h1>Clothes</h1>

      {gender === 'female' &&
        femaleClothingList.map((item, id) => {
          return (
            <div key={id}>
              <label htmlFor={item}>{item}</label>
              <input type="checkbox" name={item} id={item} />
            </div>
          );
        })}
      {gender === 'male' &&
        maleClothingList.map((item, id) => {
          return (
            <div key={id}>
              <label htmlFor={item}>{item}</label>
              <input type="checkbox" name={item} id={item} />
            </div>
          );
        })}

      {gender === null && <p>Select a gender</p>}
    </div>
  );
};

export default ClothesList;
