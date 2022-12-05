import { fork, all } from 'redux-saga/effects'
import AppSaga from '../Components/Services'

export default function* RootSaga() {
  yield all([
    fork(AppSaga),
  ])
}