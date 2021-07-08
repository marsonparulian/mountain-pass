// Default state for Service form

const serviceFormDefaultState = {
    // Indicate if a form just has been successfully submitted
    saveSuccess: false,
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
