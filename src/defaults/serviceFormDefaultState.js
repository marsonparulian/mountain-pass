// Default state for Service form

const serviceFormDefaultState = {
    // Indicate the service has just been saved
    // If not `false`, will have value object of key/value pairs of the saved service.
    savedService: false,
    // Fields of the form
    fields: {
        name: {
            value: "",
            // helper message
            msg: "",
        },
        version: {
            value: "",
            // Helper message
            msg: "",
        }
    }
}
export default serviceFormDefaultState;
