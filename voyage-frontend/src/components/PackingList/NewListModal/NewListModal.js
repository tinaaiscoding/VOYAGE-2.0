import React from 'react'
import Modal from '../../../components/UI/Modal'
import './NewListModal.scss'

const NewListModal = ({ setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <Modal id="Packing-List-Modal">
      <h1>Add Packing List</h1>
      <button onClick={handleCloseModal}>X</button>
    </Modal>
  )
}

export default NewListModal
