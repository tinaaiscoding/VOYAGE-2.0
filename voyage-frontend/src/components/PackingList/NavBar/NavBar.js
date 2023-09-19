import React from 'react'


const PackingListNavBar = ({ setShowModal }) => {
  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <div>
      <button className='button-80'>Clothing</button>
      <button className='button-80' onClick={handleShowModal}>Add</button>
    </div>
  )
}

export default PackingListNavBar