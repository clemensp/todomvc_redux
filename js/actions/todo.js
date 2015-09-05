export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

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

