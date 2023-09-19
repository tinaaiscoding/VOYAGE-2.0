import React, { useState } from 'react'
import Modal from '../../../components/UI/Modal'
import './NewListModal.scss'

const NewListModal = ({ setShowModal, newList, setNewList }) => {
  const [newListName, setNewListName] = useState('')

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleAddPackingList = (event) => {
    event.preventDefault()
    setNewList([...newList, newListName])
    setShowModal(false)
  }

  return (
    <Modal id="Packing-List-Modal">
      <h1>Add Packing List</h1>
      <button className='button-80' onClick={handleCloseModal}>X</button>

      <form onSubmit={handleAddPackingList}>
        <label htmlFor="name">List name:</label>
        <input type="text" id='name' value={newListName} onChange={(event) => {setNewListName(event.target.value)}}/>

        <button className='button-80'>Add</button>
      </form>
    </Modal>
  )
}

export default NewListModal
