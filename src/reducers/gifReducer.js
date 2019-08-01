import { FETCH_GIF } from '../actions/types';

const initState = {
  gif: {},
  queryState: '',
  weirdnessLevel: 0,
}

const gifReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GIF:
      return {
        ...state,
        gif: action.gif.data,
        queryState: action.queryState
      }
    default:
      return state;
  }
}

export default gifReducer;