import { supabase } from '../config/supabase';

const getPackingListItems = async (currentListId, setPackingListItems) => {
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

const getCurrentListId = async (currentList, setCurrentListId) => {
  const { data, error } = await supabase
    .from('packing_list')
    .select('id')
    .eq('name', currentList);

  setCurrentListId(data[0].id);

  if (error) {
    console.log(error);
  }
};

const handleAddNewPackingItem = async (
  event,
  item,
  setItem,
  currentListId,
  setPackingListItems
) => {
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
    getPackingListItems(currentListId, setPackingListItems);
    setItem('');
  }
};

const handleCheckItem = async (event, setItemId, setChecked) => {
  setItemId(event.target.id);

  const { data, error } = await supabase
    .from('packing_item')
    .select('checked')
    .eq('id', event.target.id);

  setChecked(data[0].checked);
};

const updateCheckedItem = async (checked, itemId) => {
  const { data, error } = await supabase
    .from('packing_item')
    .update({ checked: !checked })
    .eq('id', itemId)
    .select();

  if (error) {
    console.log(error);
  }
};

const handleEdit = (event, setEditing, setEditId) => {
  setEditing(true);
  setEditId(event.target.id);
};

const handleSaveEdit = async (
  event,
  setEditing,
  editItem,
  editId,
  currentListId,
  setPackingListItems
) => {
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
    getPackingListItems(currentListId, setPackingListItems);
  }
};

const handleDelete = async (event, currentListId, setPackingListItems) => {
  const { error } = await supabase
    .from('packing_item')
    .delete()
    .eq('id', event.target.id);

  if (error) {
    console.log(error);
  } else {
    getPackingListItems(currentListId, setPackingListItems);
  }
};

export {
  getPackingListItems,
  getCurrentListId,
  handleAddNewPackingItem,
  handleCheckItem,
  updateCheckedItem,
  handleEdit,
  handleSaveEdit,
  handleDelete,
};
