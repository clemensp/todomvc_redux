import * as types from '../constants/ActionTypes';

export function addItem(description) {
  return {
    type: types.ADD_ITEM,
    description
  };
}

export function toggleItem(id) {
  return {
    type: types.TOGGLE_ITEM,
    id
  };
}

export function removeItem(id) {
  return {
    type: types.REMOVE_ITEM,
    id
  };
}

export function saveItem(id, description) {
  return {
    type: types.SAVE_ITEM,
    description,
    id
  };
}

export function toggleAllItems() {
  return {
    type: types.TOGGLE_ALL_ITEMS
  };
}

export function clearCompletedItems() {
  return {
    type: types.CLEAR_COMPLETED_ITEMS
  };
}

export function setFilter(filter) {
  return {
    type: types.SET_FILTER,
    filter
  };
}
