//services reducer
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../actions/actionTypes";

const servicesReducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.FETCH_SERVICES_SUCCESS:
            newState = cloneDeep(state);
            newState.services = action.payload.services;
            return newState;

        default:
            return state;
    }
}

export default servicesReducer;
