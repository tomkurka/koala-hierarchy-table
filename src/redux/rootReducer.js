import { combineReducers } from "redux"
import hierarchyTableReducer from "./hierarchyTable/hierarchyTableReducer"

export const rootReducer = combineReducers({
  hierarchyTable: hierarchyTableReducer,
})
