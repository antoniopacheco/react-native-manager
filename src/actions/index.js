import firebase from "@firebase/app";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from "./types";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

const loginUserSuccess = (dispatch, user, history) => {
  console.log(history);
  dispatch({
    type: LOGIN_USER_SUCESS,
    payload: user
  });
  history.push("employeeList");
};

const loginUserFailed = dispatch => {
  dispatch({
    type: LOGIN_USER_FAILED
  });
};

export const loginUser = ({ email, password }, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, history))
      // this catch will be used to try to create an account if the auth failed
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user, history))
          .catch(() => loginUserFailed(dispatch));
      });
  };
};
