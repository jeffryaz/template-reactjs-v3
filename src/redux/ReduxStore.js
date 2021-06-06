import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import reduxReducer from "./ReduxReducer";
import reduxSaga from "./ReduxSaga";
import ReduxPersist from "./ReduxPersist";

let finalReducers = reduxReducer;
if (ReduxPersist.active) {
  const persistConfig = ReduxPersist.storeConfig;
  finalReducers = persistReducer(persistConfig, reduxReducer);
}
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const logger = createLogger({});

// Delete logger pada middlewares untuk build Production
const middlewares = [sagaMiddleware, logger, promiseMiddleware, thunk];

const reduxStore = createStore(
  finalReducers,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(reduxSaga);

const persistor = persistStore(reduxStore);
const store = reduxStore;

export default {
  persistor,
  store,
};
