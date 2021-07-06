// Reducer for app state
import { clone } from "lodash";
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../actions/actionTypes";

const appReducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.SHOW_SERVICE_FORM:
            newState = cloneDeep(state);
            newState.showModal = true;
            return newState;
        case actionTypes.HIDE_SERVICE_FORM:
            newState = clone(state);
            newState.showModal = false;
            return newState;
        default:
            return state;
    }
}
export default appReducer;
