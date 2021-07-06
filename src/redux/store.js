// Store
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
// Import reducers
import appReducer from "./reducers/appReducer";
import servicesReducer from "./reducers/servicesReducer";
import serviceFormReducer from "./reducers/serviceFormReducer";
// Import default state
import appDefaultState from "../defaults/appDefaultState";
import servicesDefaultState from "../defaults/servicesDefaultState";
import serviceFormDefaultState from "../defaults/serviceFormDefaultState";

// Reducers
export const rootReducer = combineReducers({
    app: appReducer,
    services: servicesReducer,
    serviceForm: serviceFormReducer,
});

// Combine default state
export const defaultState = {
    app: appDefaultState,
    services: servicesDefaultState,
    serviceForm: serviceFormDefaultState,
}

// Create Store
const store = createStore(rootReducer, defaultState, applyMiddleware(reduxThunk));
export default store;
