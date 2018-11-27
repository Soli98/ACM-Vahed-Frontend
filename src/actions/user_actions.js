import axios from 'axios';

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";
const LOGOUT = "LOGOUT";
export const authHeader = {
  'Authorization': `JWT ${localStorage.authToken}`,
}

export function login(credentials, callback) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    
    axios.post('/api/auth/users/login/', credentials).then(res => {
      localStorage.authToken = res.data.token
      console.log("Token Saved.");
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.data
      });
      callback();
    }).catch(error => {
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: error.response.data
      })
    })
  }
}

export function logout() {
  delete localStorage.authToken
  return { type: LOGOUT }
}

export function signup(data) {
  return dispatch => {
    axios.post('/api/auth/users/', data).then(() => {
      dispatch(login({email: data.email, password: data.password}));
    }).catch(error => {
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: error.response.data
      })
    })
  }
}

export function fetchUser(token) {
  return dispatch => {
      dispatch({
        type: LOGIN_SUCCESS,
        user: token
      })
  }
}