packages
==========
npm i react react-dom redux react-redux react-router-dom redux-devtools-extension redux-saga 

combineReducer, createStore, compose, applyMiddleware, composeWithDevTools, Provider, connect, mapStateToProps, mapDispatchToProps,


Root Reducer
=============
import { combineReducers } from 'redux'

store.js - only reducer
============

import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './rootReducer'

const middleware = []
const enhancer = compose(composeWithDevTools(...middleware))

const store = createStore(rootReducer, enhancer)

export default store

index.js
=========
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



connect, mapStateToProps, mapDispatchToProps
=========
const mapStateToProps = (state) => ({
  appName: state.App.appName
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)


root saga
========
import { fork, all } from 'redux-saga/effects'
import AppSaga from '../Components/Services'

export default function* RootSaga() {
  yield all([
    fork(AppSaga),
  ])
}

Store
=========
import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = compose(composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(RootSaga)

