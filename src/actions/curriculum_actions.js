import axios from 'axios';
import QS from 'querystring';
const FETCH_CURRICULUMS = "FETCH_CURRICULUMS"
const FETCH_CURRICULUM = "FETCH_CURRICULUM"
const ADD_OFFERING_TO_CURRICULUM = "ADD_OFFERING_TO_CURRICULUM"
const SEARCH_OFFERING = "SEARCH_OFFERING"
const DEL_OFFERING_FROM_CURRICULUM = "DEL_OFFERING_FROM_CURRICULUM"

export const config = {
  headers: {
    'Authorization': `JWT ${localStorage.authToken}`,
    "Content-Type": "application/x-www-form-urlencoded"
  }
}

export function addCurriculum(data, callback) {
  return dispatch => {
    axios.post('/api/curriculum', QS.stringify(data), config)
      .then((res) => callback())
  }
}

export function deleteCurriculum(id, callback) {
  return dispatch => {
    axios.delete(`/api/curriculum/${id}`, config)
      .then(() => callback())
  }
}

export function editCurriculum(id, data, callback) {
  return dispatch => {
    axios.post(`/api/curriculum/${id}`, QS.stringify(data), config)
      .then(() => callback())
  }
}

export function fetchCurriculums() {
  return dispatch => {
    axios.get('/api/curriculum', config)
      .then(res => {
        dispatch({
          type: FETCH_CURRICULUMS,
          curriculums: res.data
        })
      })
  }
}

export function fetchCurriculum(id) {
  return dispatch => {
    axios.get(`/api/curriculum/${id}`, config)
      .then(res => {
        dispatch({
          type: FETCH_CURRICULUM,
          curriculum: res.data
        })
      })
  }
}

export function addOfferingToCurriculum(oid, cid) {
  return dispatch => {
    axios.post(`/api/curriculum/${cid}/offering/${oid}`, null, config)
      .then(res => {
        dispatch({
          type: ADD_OFFERING_TO_CURRICULUM,
          curriculum: res.data
        })
      })
  }
}

export function deleteOfferingFromCurriculum(oid, cid) {
  return dispatch => {
    axios.delete(`/api/curriculum/${cid}/offering/${oid}`, config)
      .then(res => {
        dispatch({
          type: DEL_OFFERING_FROM_CURRICULUM,
          oid
        })
      })
  }
}

export function searchOffering(data) {
  return dispatch => {
    axios.get(`/api/offering/?name=${data.name}&type=${data.type}`, config)
      .then(res => {
        dispatch({
          type: SEARCH_OFFERING,
          results: res.data
        })
      })
  }
}