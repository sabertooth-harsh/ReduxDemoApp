import { createStore, applyMiddleware } from 'redux';
import { userInfoReducer } from './userInfo';
import thunk from 'redux-thunk';

const store = createStore(
    userInfoReducer,
    applyMiddleware(thunk)
);
export default store;