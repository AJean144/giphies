import { FETCH_GIFS } from './types';
import { BASE_URL } from '../api.js';
import axios from 'axios';

export const fetchGifs = (query) => dispatch => {
  axios.get(`${BASE_URL}search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=10`)
    .then((res) => {
      dispatch({
        type: FETCH_GIFS,
        gifs: res.data
      })
    })
    .catch((err) => console.error(err))
}