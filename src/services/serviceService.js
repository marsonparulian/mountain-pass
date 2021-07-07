// Services related to service (entity)
import fetch from "cross-fetch";

// Credential. Note: since this is a client app, we do not need to hide  auth token, e.g.: put in `.env` file.s
const token = "bWFyc29uOmVSZDc";

/**
 * Fetch list of `service` from remote end point.
 * @param {string} query - Filter/search string. Note: Currently not used, for future development.
 * @param {number} page  - Number of page of total result.
 * @return {Promise<response>} - Promise with argument of response from remote endpoint.
 */
export const getServices = async (query = null, page = 1) => {
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
