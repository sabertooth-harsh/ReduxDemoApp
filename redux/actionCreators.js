import * as actionTypes from './actionTypes';

export const incrementAsync = val => dispatch => {
    console.log(val);
    setTimeout(() => {
        dispatch(increment(val));
    }, 2000);
}

export const increment = (val) => (console.log(val), {
    type: actionTypes.INCREMENT,
    payload: val
});

export const decrement = (pl) => ({
    type: actionTypes.DECREMENT,
    payload: pl
});