// Reducer for Service form
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../actions/actionTypes";
import serviceFormDefaultState from "../../defaults/serviceFormDefaultState";

const serviceFormReducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.SAVE_SERVICE_SUCCESS:
            newState = cloneDeep(state);

            // Reset the fields to default value
            newState.fields = cloneDeep(serviceFormDefaultState.fields);

            return newState;
        case actionTypes.UPDATE_FIELD_VALUE:
            newState = cloneDeep(state);
            newState.fields[action.payload.field] = action.payload.value;
            return newState;
        default:
            return state;
    }
}
export default serviceFormReducer
