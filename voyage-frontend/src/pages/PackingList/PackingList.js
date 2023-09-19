import React, { useState } from 'react';
import NavBar from '../../components/PackingList/NavBar/NavBar';
import ClothesList from '../../components/PackingList/ClothesList/ClothesList';

const PackingList = () => {
  const [gender, setGender] = useState(null)

  const handleSelection = (event) => {
    setGender(event.target.id)
  }

  return (
    <div>
      <h1>Packing List</h1>
      <input type="radio" name="gender" id="female" onClick={handleSelection}/>
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" id="male" onClick={handleSelection}/>
      <label htmlFor="male">Male</label>

      <NavBar />

      <ClothesList gender={gender} />
    </div>
  );
};

export default PackingList;
