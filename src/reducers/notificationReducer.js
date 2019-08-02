import {
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  WARNING_NOTIFICATION,
  INFO_NOTIFICATION,
} from '../actions/types';

const initState = {
  notificationType: '',
  notificationState: false,
  notificationMessage: '',
  gif: {},
  queryState: '',
  newSearchTerm: '',
  weirdnessLevel: 0,
}

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS_NOTIFICATION:
      return {
        ...state,
        notificationType: 'success',
        notificationState: action.notificationState,
        notificationMessage: 'Nice! Choose another search term',
      }
    case ERROR_NOTIFICATION:
      return {
        ...state,
        notificationType: 'error',
        notificationState: action.notificationState,
        notificationMessage: 'Select a new search term',
      }
    case WARNING_NOTIFICATION:
      return {
        ...state,
        notificationType: 'warning',
        notificationState: action.notificationState,
        notificationMessage: 'Warning',
      }
    case INFO_NOTIFICATION:
      return {
        ...state,
        notificationType: 'info',
        notificationState: action.notificationState,
        notificationMessage: 'Submit a new search term',
      }
    default:
      return state;
  }
}

export default notificationReducer;