import * as actions from "./ActionTypes";

export const handleScreenSizeChange = () => ({
  type: actions.CHANGE_SCREEN_SIZE,
  innerWidth: window.innerWidth //the width of the browser window (viewport)
});
