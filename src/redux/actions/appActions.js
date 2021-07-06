// Application / general level actions
import actionTypes from "./actionTypes";

/**
 * Returns action to update field value (usually in a form)
 */
export const updateFieldValue = (field, value = "") => {
    return {
        type: actionTypes.UPDATE_FIELD_VALUE,
        payload: {
            field,
            value,
        }
    }
}
