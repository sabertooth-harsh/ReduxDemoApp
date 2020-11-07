import { createStore } from 'redux';
import { valueReducer } from './val';

const store = createStore(
    valueReducer
);
export default store;