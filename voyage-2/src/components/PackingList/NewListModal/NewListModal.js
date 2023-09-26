import React, { useState } from 'react';
import { supabase } from '../../../config/supabase';
import Modal from '../../../components/UI/Modal';
import './NewListModal.scss';

const NewListModal = ({ setShowModal, packingList, setPackingList }) => {
  const [newListName, setNewListName] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddPackingList = async (event) => {
    event.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('packing_list')
      .insert({ name: newListName, user_id: user.id })
      .select()

      console.log("DATA BACK: ", data)
  
      setPackingList([...packingList, data[0]])

    if (error) {
      console.log(error);
    } else {
      setShowModal(false);
    }
  };

  return (
    <Modal id="Packing-List-Modal">
      <h1>Add Packing List</h1>
      <button className="button-80" onClick={handleCloseModal}>
        X
      </button>

      <form onSubmit={handleAddPackingList}>
        <label htmlFor="name">List name:</label>
        <input
          type="text"
          id="name"
          value={newListName}
          onChange={(event) => {
            setNewListName(event.target.value);
          }}
        />

        <button className="button-80">Add</button>
      </form>
    </Modal>
  );
};

export default NewListModal;
