import React, { useEffect, useState } from 'react';
import { supabase } from '../../../config/supabase';

const PackingListNavBar = ({ setShowModal, setCurrentList, packingList, setPackingList }) => {

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleShowNewList = (event) => {
    setCurrentList(event.target.name);
  };

  useEffect(() => {
    const getPackingList = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from('packing_list')
        .select()
        .eq('user_id', user.id);

      setPackingList(data);

      if (error) {
        console.log(error);
      }
    };

    getPackingList();
  }, []);

  return (
    <div>
      <button onClick={handleShowNewList} name="clothing" className="button-80">
        Clothing
      </button>

      {packingList.map((list, id) => (
        <button
          key={id}
          name={list.name}
          className="button-80"
          onClick={handleShowNewList}
        >
          {list.name}
        </button>
      ))}

      <button className="button-80" onClick={handleShowModal}>
        +
      </button>
    </div>
  );
};

export default PackingListNavBar;
