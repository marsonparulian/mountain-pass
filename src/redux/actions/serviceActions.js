// Action creators related to Service
import { validateSaveFields, postService } from "../../services/serviceService";
import actionTypes from "./actionTypes";
import { fetchServices } from "./serviceListActions";

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

        // Validate
        const validationResult = await validateSaveFields(data);
        if (!validationResult.isValid) {
            // Failed validation
            dispatch(saveSuccessFailure({
                fields: validationResult.fields
            }));
            return;
        }

        // Save
        await postService(data);

        // Dispatch actions
        dispatch(saveServiceSuccess());
        // Fetch all available services
        dispatch(fetchServices());
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
export const saveSuccessFailure = (payload) => {
    return {
        type: actionTypes.SAVE_SERVICE_FAILURE,
        payload,
    }
}
