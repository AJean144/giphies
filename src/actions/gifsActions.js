import {
  FETCH_GIF,
  UPDATE_QUERY_STATE,
  LIKE_GIF,
  UNLIKE_GIF,
  SUCCESS_NOTIFICATION,
  CLEAR_CURRENT_GIF
} from './types';
import { getWeirdnessApi } from '../api.js';
import axios from 'axios';

export const fetchGif = (queryState, weirdnessLevel) => dispatch => {
  axios.get(getWeirdnessApi(queryState, weirdnessLevel))
    .then(res => {
      dispatch({
        type: FETCH_GIF,
        gif: res.data,
        weirdnessLevel,
      })
    })
    .catch(err => console.error(err))
}

export const updateQueryState = queryState => dispatch => {
  dispatch({
    type: UPDATE_QUERY_STATE,
    queryState,
  })
}

export const likeGif = (likedGif, weirdnessLevel) => dispatch => {
  dispatch({
    type: LIKE_GIF,
    likedGif,
    weirdnessLevel,
  })
}

export const handleUnlike = gifId => dispatch => {
  dispatch({
    type: UNLIKE_GIF,
    gifId,
  })
}

export const notify = message => dispatch => {
  dispatch({
    type: SUCCESS_NOTIFICATION,
    message,
  })
}

export const clearCurrentGifState = () => dispatch => dispatch({ type: CLEAR_CURRENT_GIF })