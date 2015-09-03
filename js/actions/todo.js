export const ADD_ITEM = 'ADD_ITEM';

export function addItem(description) {
  return {
    type: ADD_ITEM,
    description: description
  };
}

