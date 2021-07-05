// Store
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
// Import reducers
import appReducer from "./reducers/appReducer";
// Import default state
import appDefaultState from "../defaults/appDefaultState";

// Reducers
export const rootReducer = combineReducers({
    app: appReducer
});

// Combine default state
export const defaultState = {
    app: appDefaultState
}

// Create Store
const store = createStore(rootReducer, defaultState, applyMiddleware(reduxThunk));
export default store;
