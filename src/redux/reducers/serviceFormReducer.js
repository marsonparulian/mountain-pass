// Reducer for Service form
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../actions/actionTypes";

const serviceFormReducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.UPDATE_FIELD_VALUE:
            newState = cloneDeep(state);
            newState.fields[action.payload.field] = action.payload.value;
            return newState;
        default:
            return state;
    }
}
export default serviceFormReducer
