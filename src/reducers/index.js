import { combineReducers } from 'redux';
import gifReducer from './gifReducer';
import likedGifsReducer from './likedGifsReducer';
import queryReducer from './queryReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
    gif: gifReducer,
    query: queryReducer,
    likedGifs: likedGifsReducer,
    notification: notificationReducer,
});