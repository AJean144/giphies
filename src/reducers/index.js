import { combineReducers } from 'redux';
import gifReducer from './gifReducer';
import queryReducer from './queryReducer';

export default combineReducers({
    gif: gifReducer,
    query: queryReducer,
});