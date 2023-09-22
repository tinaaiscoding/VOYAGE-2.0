import React from 'react';

const PackingListNavBar = ({ setShowModal, packingList, setCurrentList }) => {
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleShowNewList = (event) => {
    setCurrentList(event.target.name);
  };

  return (
    <div>
      <button onClick={handleShowNewList} name="clothing" className="button-80">
        Clothing
      </button>

      {packingList.map((list, id) => (
        <button
          key={id}
          name={list}
          className="button-80"
          onClick={handleShowNewList}
        >
          {list}
        </button>
      ))}

      <button className="button-80" onClick={handleShowModal}>
        +
      </button>
    </div>
  );
};

export default PackingListNavBar;
