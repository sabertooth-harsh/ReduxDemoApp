import { createStore, applyMiddleware } from 'redux';
import { userInfoReducer } from './userInfo';
import thunk from 'redux-thunk';

const store = createStore(
    userInfoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
export default store;