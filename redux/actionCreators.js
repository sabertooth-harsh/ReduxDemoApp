import * as actionTypes from './actionTypes';

export const increment = (pl) => ({
    type: actionTypes.INCREMENT,
    payload: 1

});

export const decrement = (pl) => ({
    type: actionTypes.DECREMENT,
    payload: 1
});