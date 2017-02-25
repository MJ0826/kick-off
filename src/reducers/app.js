import { ADD_TODO_PENDING, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from '../constants/actionTypes';

const initialState = {

};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_PENDING:
      return state;
      break;
    default:
      return state;
      break;
    }
};
