import React, { useEffect, useState } from 'react';
import { supabase } from '../../../config/supabase';

const NewList = ({ currentList }) => {
  const [packingListItems, setPackingListItems] = useState([]);
  const [item, setItem] = useState('');
  const [currentListId, setCurrentListId] = useState(null);
  const [checked, setChecked] = useState(null);
  const [itemId, setItemId] = useState(null);

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
      setItem('');
    }
  };

  const handleCheckItem = async (event) => {
    setItemId(event.target.id);

    const { data } = await supabase
      .from('packing_item')
      .select('checked')
      .eq('id', event.target.id);

    setChecked(data[0].checked);
  };

  useEffect(() => {
    const updateCheckedItem = async () => {
      console.log('currently', checked);
      console.log(itemId);
      const { data, error } = await supabase
        .from('packing_item')
        .update({ checked: !checked })
        .eq('id', itemId)
        .select()
        .order('create_at', { ascending: true })

      console.log(data);
      if (error) {
        console.log(error);
      }
    };
    if (itemId !== null && checked !== null) {
      updateCheckedItem();
    }
  }, [checked]);

  useEffect(() => {
    const getCurrentListId = async () => {
      const { data, error } = await supabase
        .from('packing_list')
        .select('id')
        .eq('name', currentList)

      setCurrentListId(data[0].id);

      if (error) {
        console.log(error);
      }
    };

    getCurrentListId();
  }, [currentList]);

  useEffect(() => {
    const getPackingListItems = async () => {
      const { data, error } = await supabase
        .from('packing_item')
        .select()
        .eq('packing_list_id', currentListId);

      setPackingListItems(data);

      if (error) {
        console.log(error);
      }
    };

    if (currentListId !== null) {
      getPackingListItems();
    }
  }, [currentListId]);

  return (
    <div>
      <h1>{currentList}</h1>

      {packingListItems.map((item) => {
        return (
          <div key={item.id}>
            <label htmlFor={item.name}>{item.name}</label>
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
