// Actions related to list of service (plural)
import actionTypes from "./actionTypes";
import { getServices } from "../../services/serviceService";

/**
 * Start fetching services
 */
export const fetchServices = (page = null) => {
    return async (dispatch) => {
        // Fetch services
        const services = await getServices();

        dispatch(fetchServicesSuccess(services));

    }
}

/**
 * Successfully fetched
 */
const fetchServicesSuccess = (services) => {
    return {
        type: actionTypes.FETCH_SERVICES_SUCCESS,
        payload: {
            services
        }
    }
}
/**
 * Set the filtered services.
 * @param {array | null} filteredServices   - The filtered services
 * @return {action}
 */
export const setFilteredServices = (filteredServices) => {
    return {
        type: actionTypes.SET_FILTERED_SERVICES,
        payload: filteredServices,
    }
}

export const updateQuery = (query) => {
    return {
        type: actionTypes.UPDATE_QUERY,
        payload: query,
    }
}
