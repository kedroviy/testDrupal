import {SET_IS_LOAD, SET_CURRENT_POST} from '../TYPES.ts';

const initialState = {
  isLoad: false,
  currentPost: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOAD:
      return {...state, isLoad: action.payload};
    case SET_CURRENT_POST:
      return {...state, currentPost: action.payload};
    default:
      return state;
  }
}

export {appReducer};
