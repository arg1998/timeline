import * as actionTypes from "../actions/ActionTypes";
import clone from "clone";

import rawData from "../../res/data.json";

// NOTE : by default we set the initial buffer to null, and then
// in the componentDidMount() function in <TimeLine /> component
// we request for Level 1

// NOTE: have a raw data and a buffer, we transform the raw date
// into the buffer according to user actions

const initialState = {
  config: rawData.config,
  selected_index: -1,
  toggle: false,
  buffer: []
};

const timeLineReducer = (oldState = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case actionTypes.LOAD_LEVEL:
      // cloning state
      newState = {
        config: oldState.config,
        selected_index: oldState.selected_index,
        toggle: oldState.toggle,
        buffer: null
      };
      // transformation of data
      if (newState.toggle) {
        newState.buffer = rawData.data.filter(
          eventObject => eventObject.level <= action.payload.level
        );
      } else {
        newState.buffer = rawData.data.filter(
          eventObject => eventObject.level === action.payload.level
        );
      }
      break;

    case actionTypes.TOGGLE_LEVEL:
      // cloning state
      newState = {
        config: oldState.config,
        selected_index: oldState.selected_index,
        toggle: null,
        buffer: null
      };
      // transformation of data
      newState.toggle = !oldState.toggle;
      if (newState.toggle) {
        newState.buffer = rawData.data.filter(
          eventObject => eventObject.level <= action.payload.level
        );
      } else {
        newState.buffer = rawData.data.filter(
          eventObject => eventObject.level === action.payload.level
        );
      }
      break;

    case actionTypes.SELECT_EVENT:
      // get payload data
      let { selected_index } = action.payload;
      // cloning state
      newState = clone(oldState);
      // transformation of data
      newState.selected_index = selected_index;
      break;

    case actionTypes.CLOSE_FULL_INFO:
      // cloning state
      newState = clone(oldState);
      // transformation of data
      newState.selected_index = -1;
      break;

    default:
      newState = oldState;
      break;
  }

  return newState;
};

export default timeLineReducer;
