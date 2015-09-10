export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SAVE_ITEM = 'SAVE_ITEM';
export const TOGGLE_ALL_ITEMS = 'TOGGLE_ALL_ITEMS';
export const CLEAR_COMPLETED_ITEMS = 'CLEAR_COMPLETED_ITEMS';
export const SET_FILTER = 'SET_FILTER';

export function addItem(description) {
  return {
    type: ADD_ITEM,
    description
  };
}

export function toggleItem(id) {
  return {
    type: TOGGLE_ITEM,
    id
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id
  };
}

export function saveItem(id, description) {
  return {
    type: SAVE_ITEM,
    description,
    id
  };
}

export function toggleAllItems() {
  return {
    type: TOGGLE_ALL_ITEMS
  };
}

export function clearCompletedItems() {
  return {
    type: CLEAR_COMPLETED_ITEMS
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  };
}
