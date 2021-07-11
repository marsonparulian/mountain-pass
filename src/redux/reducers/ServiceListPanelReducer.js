// Reducer for ServiceListPanel default state
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../actions/actionTypes";

const reducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.SET_FILTERED_SERVICES:
            newState = cloneDeep(state);

            // Set the filtered services. Could be `null` or an array.
            newState.serviceList.services = action.payload;

            return newState;
        case actionTypes.UPDATE_QUERY:
            newState = cloneDeep(state);

            // Update query
            newState.serviceListFilter.query = action.payload;

            return newState;
        default:
            return state;
    }
}

export default reducer;
