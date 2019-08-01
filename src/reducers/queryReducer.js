import { UPDATE_QUERY_STATE } from '../actions/types';

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
    default:
      return state;
  }
}

export default queryReducer;