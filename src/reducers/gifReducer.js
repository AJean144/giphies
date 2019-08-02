import { FETCH_GIF, CLEAR_CURRENT_GIF } from '../actions/types';
import { resetCurrentGifFromLocalStorage } from '../utils/helpers';

const initState = {
  gif: {},
  weirdnessLevel: 0,
}

const gifReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GIF:
      return {
        ...state,
        gif: action.gif.data,
        weirdnessLevel: action.weirdnessLevel,
      }
    case CLEAR_CURRENT_GIF:
      resetCurrentGifFromLocalStorage()
      return {
        ...state,
        gif: {},
        weirdnessLevel: 0
      }
    default:
      return state;
  }
}

export default gifReducer;