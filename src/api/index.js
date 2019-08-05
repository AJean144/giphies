export const BASE_URL = `http://api.giphy.com/v1/gifs/`;
export const SEARCH_URI = `search?q=`;
export const TRANSLATE_URI = `translate?s=`;
export const API_KEY = `&api_key=${process.env.REACT_APP_GIPHY_KEY}`;

export const getWeirdnessApi = (query, weirdnessLevel) => `${BASE_URL}${TRANSLATE_URI}${query}${API_KEY}&weirdness=${weirdnessLevel}`;