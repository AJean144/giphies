import { FETCH_GIFS } from '../actions/types';

const initState = {
  gifs: [],
}

const gifsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GIFS:
      return {
        ...state,
        gifs: action.gifs.data,
      }
    default:
      return state;
  }
}

export default gifsReducer;