import { createStore, applyMiddleware } from 'redux';
import { valueReducer } from './val';
import thunk from 'redux-thunk';

const store = createStore(
    valueReducer,
    applyMiddleware(thunk)
);
export default store;