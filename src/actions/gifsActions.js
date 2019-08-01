import { FETCH_GIF, UPDATE_QUERY_STATE } from './types';
import { getWeirdnessApi } from '../api.js';
import axios from 'axios';

export const fetchGif = (queryState, weirdnessLevel) => dispatch => {
  axios.get(getWeirdnessApi(queryState, weirdnessLevel))
    .then((res) => {
      dispatch({
        type: FETCH_GIF,
        gif: res.data,
      })
    })
    .catch((err) => console.error(err))
}

export const updateQueryState = queryState => dispatch => {
  dispatch({
    type: UPDATE_QUERY_STATE,
    queryState,
  })
}