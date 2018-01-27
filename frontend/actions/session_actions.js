import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => ((dispatch) => {
  APIUtil.login(user).then( (serverUser) => (
    dispatch(receiveCurrentUser(serverUser))
  ))
}); //=> receiveCurrentUser => {
//   type: RECEIVE_CURRENT_USER
//   user: serverUser
// }


export const thunk = ({dispatch, getState}) => next => action {
  if (typeof action === 'function') {
    action(dispatch, getState)
  }
  next(action)
}

login(dispatch)
