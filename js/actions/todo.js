export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

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

