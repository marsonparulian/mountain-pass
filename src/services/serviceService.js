// Services related to service (entity)
import fetch from "cross-fetch";
import cloneDeep from "lodash/cloneDeep";

// Credential. Note: since this is a client app, we do not need to hide  auth token, e.g.: put in `.env` file.s
const token = "bWFyc29uOmVSZDc";

/**
 * Fetch list of `service` by page from remote end point.
 * @param {string} query - Filter/search string. Note: Currently not used, for future development.
 * @param {number} page  - page number of total services.
 * @return {Promise<response>} - Promise with argument of response from remote endpoint.
 */
export const getServicesByPage = async (query = null, page = 1) => {
    // End point
    const url = `https://interview-web-service.mountainpass.com.au/api/v1/projects?page=${page}`;

    try {
        return fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Basic ${token}`,
            }
        });
    } catch (e) {
        console.error("Error fetching services");
        console.error(e);
    }
}
/**
 * Fetch all services from server.
 * @returns {array} - Array of services.
 */
export const getServices = async () => {
    // Fetch the first page of services
    const response = await getServicesByPage(null, 1);
    const result = await response.json();
    let services = cloneDeep(result.data);

    console.log("service of page 1 : ", services);

    // Total of pages available
    const totalPages = result.totalPages;

    // If total pages is 1, return the result
    if (totalPages === 1) {
        return services;
    } else if (totalPages > 2) {
        // Promises of fetch request
        let promises = [];
        for (let page = 2; page <= totalPages; page++) {
            promises.push(getServicesByPage(null, page));
        }

        // Wait until all promises are resolved
        const responses = await Promise.all(promises);

        // Concat the result
        for (let i = 0; i < responses.length; i++) {
            const result = await responses[i].json();

            console.log("result of next page", result);

            services = services.concat(result.data);

        }
        return services;
    } else {
        // Something wrong
        console.error("Invalid total pages when fetching services");
        return;
    }
}

export const postService = (data) => {
    const url = "https://interview-web-service.mountainpass.com.au/api/v1/projects";

    try {
        const body = JSON.stringify(data);

        return fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Basic ${token}`,
                "Content-Type": "application/json",
            },
            body
        });

    } catch (e) {
        console.error("Error POST saving a service");
        console.error(e);
    }
}
