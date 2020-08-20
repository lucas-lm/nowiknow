import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import { Middleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()

const middlewares: Middleware[] = [sagaMiddleware]

const store = createStore(rootReducer, middlewares)

sagaMiddleware.run(rootSaga)

export { store }
