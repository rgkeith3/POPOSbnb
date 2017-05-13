import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  SessionApiUtil.loginUser(user)
    .then((userRes) => dispatch(receiveCurrentUser(userRes)),
      (errors) => dispatch(receiveErrors(errors)))
);

export const logout = user => dispatch => (
  SessionApiUtil.logoutUser()
    .then(() => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors)))
);

export const signup = user => dispatch => (
  SessionApiUtil.signUpUser(user)
    .then((userRes) => dispatch(receiveCurrentUser(userRes)),
      (errors) => dispatch(receiveErrors(errors)))
);
