// Reducer for app state
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../actions/actionTypes";

const appReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SHOW_SERVICE_FORM:
            const newState = cloneDeep(state);
            newState.showModal = true;
            return newState;
        default:
            return state;
    }
}
export default appReducer;
