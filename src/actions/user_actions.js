import axios from 'axios';
import jwtDecode from 'jwt-decode';

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
    
    axios.post('/api/login/', credentials).then(res => {
      localStorage.authToken = res.data.token
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.data.token
      })
    }).then(() => {
      axios.get(`/api/user/${credentials.username}/`).then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          user: res.data
        })
        callback();
      }).catch(error => {
        console.log("ERROR")
      })
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
    axios.post('/api/user/', data).then(() => {
      dispatch(login({username: data.username, password: data.password}));
    }).catch(error => {
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: error.response.data
      })
    })
  }
}

export function fetchUser() {
  return dispatch => {
    var username = jwtDecode(localStorage.authToken).username;
    axios.get(`/api/user/${username}/`).then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.data
      })
    }).catch(error => {
      console.log("ERROR")
    })
  }
}