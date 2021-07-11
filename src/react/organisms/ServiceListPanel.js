// Service List Panel, including filter, control buttons, and list of service
import React from "react";
import PropTypes from "prop-types";
import { filterServices } from "../../services/serviceService";
import ServiceListFilterContainer from "../../redux/containers/ServiceListFilterContainer";
import ServiceList from "../molecules/ServiceList";
import Button from "../atoms/Button";

class ServiceListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddService = this.handleAddService.bind(this);
    }
    componentDidMount() {
        this.props.fetchServices();
    }
    componentDidUpdate(prevProps) {
        // After update, decide whether should filter services
        this.filterServices(prevProps);

    }
    /**
     * Decide whether should filter services. If yes : will fiter service and dispatch the result.
     * @param {object} prevProps 
     */
    async filterServices(prevProps) {
        // Query string to filter the services
        const query = this.props.serviceListPanel.serviceListFilter.query;
        // Is filter is applied ?
        const isFilterApplied = query ? true : false;
        // Is Filter different from previous filter
        const isFilterDiff = query !== prevProps.serviceListPanel.serviceListFilter.query;
        // Is the source (whole) services has changed ? This could be happened if a service has been added(through form in modal)
        const isServicesDiff = this.props.services.services !== prevProps.services.services ? true : false;

        // Will hold the filtered services
        let filteredServices = null;
        // Is the filter params has changed ?
        if (isFilterDiff) {
            // Is filter is currently applied ?
            if (isFilterApplied) {
                // Filter services
                filteredServices = await filterServices({ query }, this.props.services.services);
            } else {
                // Set the filtered services to `null`. This will display the whole (source) services.
                filteredServices = null;
            }
            this.props.setFilteredServices(filteredServices);
        } else if (isFilterApplied && isServicesDiff) {
            // If services (source) has been changed (using modal) and filter is applied, filtered services must  be re-created
            filteredServices = await filterServices({ query }, this.props.services.services);
            this.props.setFilteredServices(filteredServices);
        }
    }
    // Handle `Add Service` button click
    handleAddService() {
        this.props.handleAddService();
    }
    render() {
        // Display the filtered services. If falsy, display the source (whole) services.
        const services = this.props.serviceListPanel.serviceList.services || this.props.services.services;
        // Set the content
        let content = <div>Loading..</div>
        if (Array.isArray(services)) {
            content = <ServiceList services={services} />
        }

        return (
            <div id="service-list-panel" className="page__default section">
                <div className="section-header__2">
                    <h2>Services</h2>
                </div>
                <div>
                    <ServiceListFilterContainer />
                    <Button
                        className="btn btn-primary"
                        onClick={this.handleAddService}>
                        Add Service
                    </Button>
                </div>
                <div>
                    {content}
                </div>
                <Button
                    type="button"
                    onClick={this.handleAddService}
                    className="button-box btn btn-block btn-primary"
                >
                    Add Service
                </Button>
            </div>
        )
    }
}
ServiceListPanel.propTypes = {
    // When a `Add Service` is clicked
    handleAddService: PropTypes.func.isRequired,
    // Fetch `services`
    fetchServices: PropTypes.func.isRequired,
    // Set filtered services
    setFilteredServices: PropTypes.func.isRequired,
    // Total (whole) services, used as data source.
    services: PropTypes.object.isRequired,
}
export default ServiceListPanel;
