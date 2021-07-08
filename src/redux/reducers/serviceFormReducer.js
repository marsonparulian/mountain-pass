// Reducer for Service form
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../actions/actionTypes";
import serviceFormDefaultState from "../../defaults/serviceFormDefaultState";

const serviceFormReducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.HIDE_SERVICE_FORM:
            newState = cloneDeep(state);

            // Reset the saved service data
            newState.savedService = cloneDeep(serviceFormDefaultState.savedService);

            return newState;
        case actionTypes.SAVE_SERVICE_SUCCESS:
            newState = cloneDeep(state);

            // Reset the fields to default value
            newState.fields = cloneDeep(serviceFormDefaultState.fields);
            // Persist the saved service
            newState.savedService = cloneDeep(action.payload.service);

            return newState;
        case actionTypes.SAVE_SERVICE_FAILURE:
            newState = cloneDeep(state);

            // Set the helper / error messages
            const fields = action.payload.fields;
            newState.fields.name.msg = fields.name.msg || serviceFormDefaultState.fields.name.msg;
            newState.fields.version.msg = fields.version.msg || serviceFormDefaultState.fields.version.msg;

            return newState;
        case actionTypes.UPDATE_FIELD_VALUE:
            newState = cloneDeep(state);

            newState.fields[action.payload.field]["value"] = action.payload.value;

            return newState;
        default:
            return state;
    }
}
export default serviceFormReducer
