// Action creators related to Service
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
