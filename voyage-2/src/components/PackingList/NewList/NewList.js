import React, { useEffect, useState } from 'react';
import { supabase } from '../../../config/supabase';

const NewList = ({ currentList }) => {
  const [packingListItems, setPackingListItems] = useState([]);
  const [item, setItem] = useState('');
  const [currentListId, setCurrentListId] = useState(null);
  const [checked, setChecked] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(false);
  const [editItem, setEditItem] = useState('');

  const getPackingListItems = async () => {
    const { data, error } = await supabase
      .from('packing_item')
      .select()
      .eq('packing_list_id', currentListId)
      .order('created_at', { ascending: true });

    setPackingListItems(data);

    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCurrentListId = async () => {
      const { data, error } = await supabase
        .from('packing_list')
        .select('id')
        .eq('name', currentList);

      setCurrentListId(data[0].id);

      if (error) {
        console.log(error);
      }
    };
    getCurrentListId();
  }, [currentList]);

  useEffect(() => {
    if (currentListId !== null) {
      getPackingListItems();
    }
  }, [currentListId, checked]);

  const handleAddNewPackingItem = async (event) => {
    event.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('packing_item')
      .insert({ name: item, packing_list_id: currentListId, user_id: user.id });

    if (error) {
      console.log(error);
    } else {
      getPackingListItems();
      setItem('');
    }
  };

  const handleCheckItem = async (event) => {
    setItemId(event.target.id);

    const { data, error } = await supabase
      .from('packing_item')
      .select('checked')
      .eq('id', event.target.id);

    setChecked(data[0].checked);
  };

  useEffect(() => {
    const updateCheckedItem = async () => {
      const { data, error } = await supabase
        .from('packing_item')
        .update({ checked: !checked })
        .eq('id', itemId)
        .select();

      if (error) {
        console.log(error);
      }
    };

    if (itemId !== null && checked !== null) {
      updateCheckedItem();
      setChecked(null);
    }
  }, [checked]);

  const handleEdit = (event) => {
    setEditing(true);
    setEditId(event.target.id);
  };

  const handleSaveEdit = async (event) => {
    event.preventDefault();
    setEditing(false);
    const { data, error } = await supabase
      .from('packing_item')
      .update({ name: editItem })
      .eq('id', editId)
      .select();

    if (error) {
      console.log(error);
    } else {
      getPackingListItems();
    }
  };

  const handleDelete = async (event) => {
    const { error } = await supabase.from('packing_item').delete().eq('id', event.target.id);

    if (error) {
      console.log(error);
    } else {
      getPackingListItems();
    }
  };

  return (
    <div>
      <h1>{currentList}</h1>

      {packingListItems.map((item) => {
        return (
          <div key={item.id}>
            {editing && editId == item.id ? (
              <form onSubmit={handleSaveEdit}>
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
                  onClick={handleDelete}
                >
                  delete
                </span>
              </form>
            ) : (
              <label id={item.id} htmlFor={item.name} onClick={handleEdit}>
                {item.name}
              </label>
            )}

            <input
              id={item.id}
              name={item.name}
              type="checkbox"
              onChange={handleCheckItem}
              checked={item.checked}
            />
          </div>
        );
      })}

      <form onSubmit={handleAddNewPackingItem}>
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
