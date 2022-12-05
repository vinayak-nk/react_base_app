import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './rootReducer'

import createSagaMiddleware from 'redux-saga'
import RootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = compose(composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(RootSaga)

export default store
