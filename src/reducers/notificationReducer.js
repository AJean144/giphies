import {
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  WARNING_NOTIFICATION,
  INFO_NOTIFICATION,
} from '../actions/types';

const initState = {
  notificationType: '',
  notificationMessage: '',
}

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS_NOTIFICATION:
      return {
        ...state,
        notificationType: 'success',
        notificationMessage: action.message,
      }
    case ERROR_NOTIFICATION:
      return {
        ...state,
        notificationType: 'error',
        notificationMessage: action.message,
      }
    case WARNING_NOTIFICATION:
      return {
        ...state,
        notificationType: 'warning',
        notificationMessage: action.message,
      }
    case INFO_NOTIFICATION:
      return {
        ...state,
        notificationType: 'info',
        notificationMessage: action.message,
      }
    default:
      return state;
  }
}

export default notificationReducer;