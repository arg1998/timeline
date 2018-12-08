/*
  this reducer holds and process the global information about
  the app and the device such as Theme or device screen size.
*/

import * as actionTypes from "../actions/ActionTypes";
import clone from "clone";

const MIN_DESKTOP_SCREEN_WIDTH = 1500;
const initialState = {
  screen: {
    isDesktop: window.innerWidth >= MIN_DESKTOP_SCREEN_WIDTH
  }
};

export default (oldState = initialState, action) => {
  const newState = clone(oldState);

  switch (action.type) {
    case actionTypes.CHANGE_SCREEN_SIZE:
      newState.screen.isDesktop = action.innerWidth >= MIN_DESKTOP_SCREEN_WIDTH;
      break;

    default:
      break;
  }

  return newState;
};
