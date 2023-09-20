import React, { useState } from 'react';
import NavBar from '../../components/PackingList/NavBar/NavBar';
import ClothesList from '../../components/PackingList/ClothesList/ClothesList';
import NewListModal from '../../components/PackingList/NewListModal/NewListModal';
import NewList from '../../components/PackingList/NewList/NewList';

const PackingList = () => {
  const [gender, setGender] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [packingList, setPackingList] = useState([]);
  const [currentList, setCurrentList] = useState('clothing');

  const handleSelection = (event) => {
    setGender(event.target.id);
  };

  return (
    <div>
      <h1>Packing List</h1>
      <input type="radio" name="gender" id="female" onClick={handleSelection} />
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" id="male" onClick={handleSelection} />
      <label htmlFor="male">Male</label>

      <NavBar
        setShowModal={setShowModal}
        packingList={packingList}
        setCurrentList={setCurrentList}
      />

      {currentList === 'clothing' ? (
        <ClothesList gender={gender} />
      ) : (
        <NewList currentList={currentList} />
      )}

      {showModal && (
        <NewListModal
          setShowModal={setShowModal}
          packingList={packingList}
          setPackingList={setPackingList}
        />
      )}
    </div>
  );
};

export default PackingList;
