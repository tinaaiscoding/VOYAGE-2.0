import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabase';

import ClothesList from '../../components/PackingList/ClothesList/ClothesList';
import NavBar from '../../components/PackingList/NavBar/NavBar';
import NewList from '../../components/PackingList/NewList/NewList';
import NewListModal from '../../components/PackingList/NewListModal/NewListModal';

const PackingList = () => {
  const [gender, setGender] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentList, setCurrentList] = useState('clothing');
  const [packingList, setPackingList] = useState([]);

  useEffect(() => {
    const getGender = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      let gender = user.user_metadata.gender;

      setGender(gender);

      if (error) {
        console.log(error);
      }
    };

    getGender();
  }, []);

  return (
    <div>
      <h1>Packing List</h1>

      {showModal && (
        <NewListModal
          setShowModal={setShowModal}
          packingList={packingList}
          setPackingList={setPackingList}
        />
      )}

      <NavBar
        setShowModal={setShowModal}
        setCurrentList={setCurrentList}
        packingList={packingList}
        setPackingList={setPackingList}
      />

      {currentList === 'clothing' ? (
        <ClothesList gender={gender} />
      ) : (
        <NewList currentList={currentList} />
      )}
    </div>
  );
};

export default PackingList;
