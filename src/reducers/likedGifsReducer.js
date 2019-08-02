import { LIKE_GIF, UNLIKE_GIF } from '../actions/types';
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
      let notificationType = 'success';
      let notificationState = false;
      let notificationMessage = '';
      if (!persistedLikedGifs.hasOwnProperty(action.likedGif.id) && !persistedSearchTerms.hasOwnProperty(convertToSnakeCase(searchTerm))) {
        persistedLikedGifs[action.likedGif.id] = { ...action.likedGif, weirdnessLevel: action.weirdnessLevel, searchTerm: convertToSnakeCase(searchTerm) };

        const searchTermKey = convertToSnakeCase(searchTerm);
        persistedSearchTerms[searchTermKey] = searchTerm;
        notificationState = true;
        notificationMessage = 'Thanks for the like! Choose another search term'
      }

      return {
        ...state,
        likedGifs: persistedLikedGifs,
        searchTerms: persistedSearchTerms,
        notificationType,
        notificationState,
        notificationMessage,
      }

    case UNLIKE_GIF:
      const currentState = loadFromLocalStorage();
      const currentLikedGifs = { ...currentState.likedGifs.likedGifs };
      const currentSearchTerms = { ...currentState.likedGifs.searchTerms };
      let oldSearchTerm = '';
      if (currentLikedGifs[action.gifId]) {
        oldSearchTerm = currentLikedGifs[action.gifId].searchTerm;
      }

      let unlikeNotificationType = 'info';
      let unlikeNotificationState = false;
      let unlikeNotificationMessage = '';
      if (currentLikedGifs.hasOwnProperty(action.gifId) && currentSearchTerms.hasOwnProperty(convertToSnakeCase(oldSearchTerm))) {
        delete currentLikedGifs[action.gifId]

        const oldSearchTermKey = convertToSnakeCase(oldSearchTerm);
        delete currentSearchTerms[oldSearchTermKey];
        unlikeNotificationState = true;
        unlikeNotificationMessage = "You don't like me anymore?"
      }

      return {
        ...state,
        likedGifs: currentLikedGifs,
        searchTerms: currentSearchTerms,
        notificationType: unlikeNotificationType,
        notificationState: unlikeNotificationState,
        notificationMessage: unlikeNotificationMessage
      }
    default:
      return state;
  }
}

export default likedGifReducer;