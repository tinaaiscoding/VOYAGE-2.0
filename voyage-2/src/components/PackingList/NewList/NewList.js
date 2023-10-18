import React, { useEffect, useState } from 'react';
import {
  getPackingListItems,
  getCurrentListId,
  handleAddNewPackingItem,
  handleCheckItem,
  updateCheckedItem,
  handleEdit,
  handleSaveEdit,
  handleDelete,
} from '../../../utils/newList';

const NewList = ({ currentList }) => {
  const [packingListItems, setPackingListItems] = useState([]);
  const [item, setItem] = useState('');
  const [currentListId, setCurrentListId] = useState(null);
  const [checked, setChecked] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(false);
  const [editItem, setEditItem] = useState('');

  useEffect(() => {
    getCurrentListId(currentList, setCurrentListId);
  }, [currentList]);

  useEffect(() => {
    if (currentListId !== null) {
      getPackingListItems(currentListId, setPackingListItems);
    }
  }, [currentListId, checked]);

  useEffect(() => {
    if (itemId !== null && checked !== null) {
      updateCheckedItem(checked, itemId);
      setChecked(null);
    }
  }, [checked]);

  return (
    <div>
      <h1>{currentList}</h1>

      {packingListItems.map((item) => {
        return (
          <div key={item.id}>
            {editing && editId == item.id ? (
              <form
                onSubmit={(event) =>
                  handleSaveEdit(
                    event,
                    setEditing,
                    editItem,
                    editId,
                    currentListId,
                    setPackingListItems
                  )
                }
              >
                <input
                  type="text"
                  defaultValue={item.name}
                  onChange={(event) => {
                    setEditItem(event.target.value);
                  }}
                />
                <button>Save</button>
                <span
                  id={item.id}
                  className="material-symbols-outlined"
                  onClick={(event) =>
                    handleDelete(event, currentListId, setPackingListItems)
                  }
                >
                  delete
                </span>
              </form>
            ) : (
              <label
                id={item.id}
                htmlFor={item.name}
                onClick={(event) => handleEdit(event, setEditing, setEditId)}
              >
                {item.name}
              </label>
            )}

            <input
              id={item.id}
              name={item.name}
              type="checkbox"
              onChange={(event) =>
                handleCheckItem(event, setItemId, setChecked)
              }
              checked={item.checked}
            />
          </div>
        );
      })}

      <form
        onSubmit={(event) =>
          handleAddNewPackingItem(
            event,
            item,
            setItem,
            currentListId,
            setPackingListItems
          )
        }
      >
        <input
          type="text"
          value={item}
          onChange={(event) => {
            setItem(event.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewList;
