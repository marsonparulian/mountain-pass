// Action creators related to Service
import actionTypes from "./actionTypes";

/**
 *Showing   `service` form.
 * @param {strings} serviceId - Service id. Default is null for creating new service. 
 */
export const showServiceForm = (serviceId = null) => {
    console.log("showing service form");
    return {
        type: actionTypes.SHOW_SERVICE_FORM,
        payload: {
            serviceId
        }
    }
}
