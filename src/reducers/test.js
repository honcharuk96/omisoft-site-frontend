import {TEST} from 'actionTypes/test';

const initialState = {
    test: false
  };
  
  export default function error(state = initialState, action) {
    switch (action.type) {
      case TEST:
        return { ...state, test: true};
      default:
        return state;
    }
  }