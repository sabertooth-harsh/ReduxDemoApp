import * as actionTypes from './actionTypes';

const userInfo = {
    email: '',
    pwd: ''
}


export const userInfoReducer = (state = userInfo, action) => {
    switch (action.type) {
        default:
            return state;
    }
}