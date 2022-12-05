import { takeLatest, call, all, put } from 'redux-saga/effects'
import axios from 'axios'

import AppActions from '../Actions'

export function GET(url) {
    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => error.data)
}


export function* getUsers() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = yield call(GET, url)
    console.log("response", response)

    yield put(AppActions.setUsers(response))

  } catch (error) {
    console.log('Error')
  } finally {
    // perform some operation
  }
}


export default function* AppServices() {
  yield all([
    takeLatest('GET_USERS', getUsers)
  ])
}