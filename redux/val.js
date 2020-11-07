import * as actionTypes from './actionTypes';


export const valueReducer = (state = { val: 0 }, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, val: state.val + action.payload };

        case actionTypes.DECREMENT:
            return { ...state, val: state.val - action.payload };

        default:
            return state;
    }
}