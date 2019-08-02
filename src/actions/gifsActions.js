import {
  FETCH_GIF,
  UPDATE_QUERY_STATE,
  LIKE_GIF,
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  WARNING_NOTIFICATION,
  INFO_NOTIFICATION,
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

export const notify = (notificationState, notificationType) => dispatch => {
  switch (notificationType) {
    case 'success':
      dispatch({
        type: SUCCESS_NOTIFICATION,
        notificationState,
      })
      break;
    case 'error':
      dispatch({
        type: ERROR_NOTIFICATION,
        notificationState,
      })
      break;
    case 'warning':
      dispatch({
        type: WARNING_NOTIFICATION,
        notificationState,
      })
      break;
    case 'info':
      dispatch({
        type: INFO_NOTIFICATION,
        notificationState,
      })
      break;
    default:
      return;
  }
}

export const clearCurrentGifState = () => dispatch => dispatch({ type: CLEAR_CURRENT_GIF })