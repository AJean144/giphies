import { UPDATE_QUERY_STATE, START_OVER } from '../actions/types';

const initState = {
  queryState: '',
}

const queryReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_QUERY_STATE:
      return {
        ...state,
        queryState: action.queryState,
      }

    case START_OVER:
      return {
        ...state,
        queryState: ''
      }
    default:
      return state;
  }
}

export default queryReducer;