// loads the n'th level into the buffer, payload : {level: number}
export const LOAD_LEVEL = "LOAD_LEVEL";

// a toggle action to reset a boolean
export const TOGGLE_LEVEL = "TOGGLE_LEVEL";

// when user click the full information button on a Event, payload : {selected_index : number}
// this action loads the event info from the buffer not the raw data
export const SELECT_EVENT = "SELECT_EVENT";

// close the FullInformation SideDrawer , this action resets the selected_index to -1
export const CLOSE_FULL_INFO = "CLOSE_FULL_INFO";


