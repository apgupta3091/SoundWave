import { postUser, deleteSession, postSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = formUser => dispatch => postUser(formUser)
    .then(user => {
        !(user instanceof Array) ? dispatch(receiveCurrentUser(user)) : dispatch(receiveErrors(user))
    });
        


export const login = formUser => dispatch => postSession(formUser)
    .then(user => {
        !(user instanceof Array) ? dispatch(receiveCurrentUser(user)) : dispatch(receiveErrors(user))
    });

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));