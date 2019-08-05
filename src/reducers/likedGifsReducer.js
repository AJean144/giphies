import { LIKE_GIF, UNLIKE_GIF, START_OVER } from '../actions/types';
import { loadFromLocalStorage, convertToSnakeCase } from '../utils/helpers';

const initState = {
  likedGifs: {},
  searchTerms: {},
  notificationType: '',
  notificationState: false,
  notificationMessage: '',
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
        notificationState = true;
        notificationMessage = 'Thanks for the like! Choose another search term'
        persistedLikedGifs[action.likedGif.id] = { ...action.likedGif, weirdnessLevel: action.weirdnessLevel, searchTerm: convertToSnakeCase(searchTerm) };

        const searchTermKey = convertToSnakeCase(searchTerm);
        persistedSearchTerms[searchTermKey] = searchTerm;
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

      let unlikeNotificationType = 'success';
      let unlikeNotificationState = false;
      let unlikeNotificationMessage = '';
      if (currentLikedGifs.hasOwnProperty(action.gifId) && currentSearchTerms.hasOwnProperty(convertToSnakeCase(oldSearchTerm))) {
        unlikeNotificationState = true;
        unlikeNotificationMessage = "You don't like me anymore?"

        const oldSearchTermKey = convertToSnakeCase(oldSearchTerm);
        delete currentLikedGifs[action.gifId]
        delete currentSearchTerms[oldSearchTermKey];
      }

      return {
        ...state,
        likedGifs: currentLikedGifs,
        searchTerms: currentSearchTerms,
        notificationType: unlikeNotificationType,
        notificationState: unlikeNotificationState,
        notificationMessage: unlikeNotificationMessage
      }

    case START_OVER:
      return {
        ...state,
        likedGifs: {},
        searchTerms: {},
        notificationType: '',
        notificationState: false,
        notificationMessage: ''
      }

    default:
      return state;
  }
}

export default likedGifReducer;