import * as actionTypes from './actionTypes';

const userInfo = {
    firstName: '',
    lastName: '',
    email: '',
    pwd: '',
    contact: ''
}


export const userInfoReducer = (state = userInfo, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_INFO:
            return {
                ...state,
                firstName: action.payload.fName,
                lastName: action.payload.lName,
                email: action.payload.email,
                pwd: action.payload.pwd,
                contact: action.payload.pwd
            };

        default:
            return state;
    }
}