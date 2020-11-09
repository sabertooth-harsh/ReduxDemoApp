import * as actionTypes from './actionTypes';

export const addUserInfo = (fName, lName, email, pwd, contact) => ({
    type: actionTypes.SUBMIT_INFO,
    payload: {
        fName, lName, email, pwd, contact
    }
});