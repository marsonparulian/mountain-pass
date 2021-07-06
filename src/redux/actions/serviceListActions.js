// Actions related to list of service (plural)
import actionTypes from "./actionTypes";
import { getServices } from "../../services/serviceService";

/**
 * Start fetching services
 */
export const fetchServices = (page = null) => {
    console.log("before dispatch");
    return async (dispatch) => {
        console.log("after dispatch");
        const response = await getServices();
        const result = await response.json();
        console.log("result json ", result);

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
