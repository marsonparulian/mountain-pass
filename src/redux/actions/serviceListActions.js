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
