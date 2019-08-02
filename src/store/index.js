import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { saveToLocalStorage, loadFromLocalStorage, resetCurrentGifFromLocalStorage } from '../utils/helpers';

const middleWare = [thunk];

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

store.subscribe(() => {
  return [saveToLocalStorage(store.getState()), resetCurrentGifFromLocalStorage()]
});

export default store;