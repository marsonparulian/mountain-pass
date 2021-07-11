// <ServiceListPanel /> default state

const serviceListPanelDefaultState = {
    // Represent <ServiceListFilter />
    serviceListFilter: {
        // Query string
        query: "",
    },
    // Represent <ServiceList /> 
    serviceList: {
        // Array for filtered service. If `null` (filter is not used), display services from `services` in the root state.
        services: null,
    },
}
export default serviceListPanelDefaultState;
