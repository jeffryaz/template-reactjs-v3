import { combineReducers } from "redux";
import LoadReducers from "./Reducer";

const reduxReducer = combineReducers(LoadReducers);

const rootReducer = (state, action) => reduxReducer(state, action);

export default rootReducer;
