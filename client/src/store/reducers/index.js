import { combineReducers } from 'redux';
import Forum from "./forum";
import Prayer from "./prayer";

const rootReducer = combineReducers({
  Forum,
  Prayer
});

export default rootReducer;
