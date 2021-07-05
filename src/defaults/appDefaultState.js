// Generice state for application
const appDefaultState = {
    // To mark the whole app is busy, thus can not receive input / command
    isBusy: false,
    // Should show modal ?
    showModal: false,
    // App level message
    msg: {
        status: "info",
        msg: "default message"
    }
}
export default appDefaultState;
