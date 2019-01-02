import { createStore, compose, combineReducers } from "redux";
import timelineReducer from "./reducers/TimeLine.Reducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  timeline: timelineReducer
});

const store = createStore(rootReducer);

export default store;
