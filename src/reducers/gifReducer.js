import { FETCH_GIF, CLEAR_CURRENT_GIF, START_OVER } from '../actions/types';
import { resetCurrentGifFromLocalStorage, loadFromLocalStorage, convertToSnakeCase } from '../utils/helpers';

const initState = {
  gif: {},
  weirdnessLevel: 0,
  notificationType: '',
  notificationState: false,
  notificationMessage: '',
}

const gifReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GIF:

      const persistedState = loadFromLocalStorage();
      const persistedSearchTerms = { ...persistedState.likedGifs.searchTerms };
      const searchTerm = persistedState.query.queryState;
      let notificationType = 'error';
      let notificationState = false;
      let notificationMessage = '';
      if (persistedSearchTerms.hasOwnProperty(convertToSnakeCase(searchTerm))) {
        notificationState = true;
        notificationMessage = 'You used this search term already, choose another';

        return {
          ...state,
          notificationType,
          notificationState,
          notificationMessage,
        }
      }

      return {
        ...state,
        gif: action.gif.data,
        weirdnessLevel: action.weirdnessLevel,
        notificationType,
        notificationState,
        notificationMessage,
      }
    case CLEAR_CURRENT_GIF:
      resetCurrentGifFromLocalStorage()
      return {
        ...state,
        gif: {},
        weirdnessLevel: 0
      }
    case START_OVER:
      return {
        ...state,
        gif: {},
        weirdnessLevel: 0,
        notificationType: '',
        notificationState: false,
        notificationMessage: ''
      }
    default:
      return state;
  }
}

export default gifReducer;