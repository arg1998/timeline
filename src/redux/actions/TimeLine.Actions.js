import * as actions from "./ActionTypes";

export const loadLevel = level => ({
  type: actions.LOAD_LEVEL,
  payload: {
    level: level
  }
});

export const toggleLevelState = level => ({
  type: actions.TOGGLE_LEVEL,
  payload: {
    level: level
  }
});

export const selectEvent = index => ({
  type: actions.SELECT_EVENT,
  payload: {
    selected_index: index
  }
});

export const closeFullInfoDrawer = () => ({
  type: actions.CLOSE_FULL_INFO
});
