import { combineReducers } from "redux";
import common from "./common";
import getNewsReducer from "./getNewsReducer";
export const rootReducer = combineReducers({ common, getNewsReducer });
