export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const SAVE_ITEM = 'SAVE_ITEM';
export const TOGGLE_ALL_ITEMS = 'TOGGLE_ALL_ITEMS';

export function addItem(description) {
  return {
    type: ADD_ITEM,
    description
  };
}

export function toggleItem(index) {
  return {
    type: TOGGLE_ITEM,
    index
  };
}

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    index
  };
}

export function editItem(index) {
  return {
    type: EDIT_ITEM,
    index
  };
}

export function saveItem(index, description) {
  return {
    type: SAVE_ITEM,
    description,
    index
  };
}

export function toggleAllItems() {
  return {
    type: TOGGLE_ALL_ITEMS
  };
}

