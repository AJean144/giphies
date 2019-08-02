import { LIKE_GIF } from '../actions/types';
import { loadFromLocalStorage, convertToSnakeCase } from '../utils/helpers';

const initState = {
  likedGifs: {},
  searchTerms: {},
  notificationState: false,
}

const likedGifReducer = (state = initState, action) => {
  switch (action.type) {
    case LIKE_GIF:
      const persistedState = loadFromLocalStorage();
      const persistedLikedGifs = { ...persistedState.likedGifs.likedGifs };
      const persistedSearchTerms = { ...persistedState.likedGifs.searchTerms };
      const searchTerm = persistedState.query.queryState;
      let notificationState = false;
      if (!persistedLikedGifs.hasOwnProperty(action.likedGif.id) && !persistedSearchTerms.hasOwnProperty(convertToSnakeCase(searchTerm))) {
        persistedLikedGifs[action.likedGif.id] = { ...action.likedGif, weirdnessLevel: action.weirdnessLevel };

        const searchTermKey = convertToSnakeCase(searchTerm);
        persistedSearchTerms[searchTermKey] = searchTerm;
        notificationState = true;
      }

      return {
        ...state,
        likedGifs: persistedLikedGifs,
        searchTerms: persistedSearchTerms,
        notificationState,
      }
    default:
      return state;
  }
}

export default likedGifReducer;