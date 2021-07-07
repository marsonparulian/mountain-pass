// Action creators related to Service
import { postService } from "../../services/serviceService";
import actionTypes from "./actionTypes";

/**
 *Showing   `service` form.
 * @param {strings} serviceId - Service id. Default is null for creating new service. 
 */
export const showServiceForm = (serviceId = null) => {
    return {
        type: actionTypes.SHOW_SERVICE_FORM,
        payload: {
            serviceId
        }
    }
}
/**
 * Hide Service form
 */
export const hideServiceForm = () => {
    return {
        type: actionTypes.HIDE_SERVICE_FORM
    }
}
/**
 * Save a service and dispatch related actions.
 * @param {object} data  - Field/value pairs of a service to be saved.
 */
export const saveService = (data) => {
    return async (dispatch) => {
        dispatch(saveServiceStarted());
        console.log("saving started", data);

        // Save
        const response = await postService(data);
        const result = await response.json();
        console.log("result from response", result);

        dispatch(saveServiceSuccess());
    }
}
const saveServiceStarted = () => {
    return {
        type: actionTypes.SAVE_SERVICE_STARTED,
    }
}
const saveServiceSuccess = () => {
    return {
        type: actionTypes.SAVE_SERVICE_SUCCESS,
    }
}
