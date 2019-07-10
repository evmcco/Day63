import { combineReducers } from "redux";
import activityReducer from "./activity";
import nameReducer from "./name";

//combine Reducers produces the rootReducer, store.js always looks in index.js for it
export default combineReducers({
  activity: activityReducer,
  name: nameReducer
});
//now we can call activityReducer by state.activity instead of state.activityReducer
