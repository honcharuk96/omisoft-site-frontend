import {TEST} from 'actionTypes/test';

const initialState = {
    info: "text info"
  };
  
  export default function test(state = initialState, action) {
    switch (action.type) {
      case TEST:
        return { ...state, info: action.payload.info};
      default:
        return state;
    }
  }