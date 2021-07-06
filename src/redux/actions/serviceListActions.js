// Actions related to list of service (plural)
import actionTypes from "./actionTypes";
import { getServices } from "../../services/serviceService";

/**
 * Start fetching services
 */
export const fetchServices = (page = null) => {
    return async (dispatch) => {
        const response = await getServices();
        const result = await response.json();

        dispatch(fetchServicesSuccess(result.data));
        return result;
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
