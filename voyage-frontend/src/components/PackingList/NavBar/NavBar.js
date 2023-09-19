import React from 'react';

const PackingListNavBar = ({ setShowModal, newList }) => {
  const handleShowModal = () => {
    setShowModal(true);
  };

  console.log(newList);

  return (
    <div>
      <button className="button-80">Clothing</button>

      {newList.map((list, id) => (
        <button key={id} className="button-80">{list}</button>
      ))}

      <button className="button-80" onClick={handleShowModal}>
        +
      </button>
    </div>
  );
};

export default PackingListNavBar;
