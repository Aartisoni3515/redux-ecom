import { CALCULATOR_KEY, reducer } from "./reducer";
import { combineReducers } from "redux";
let rootReducer = combineReducers({
 [CALCULATOR_KEY] :reducer
});
export {rootReducer};
