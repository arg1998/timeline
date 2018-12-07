import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import globalConfigsReducer from "./reducers/configReducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  globalConfigs: globalConfigsReducer
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
