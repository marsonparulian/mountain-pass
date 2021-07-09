// Service List Panel, including filter, control buttons, and list of service
import React from "react";
import PropTypes from "prop-types";
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
    // Handle `Add Service` button click
    handleAddService() {
        this.props.handleAddService();
    }
    render() {
        // Set the content
        let content = <div>Loading..</div>
        if (Array.isArray(this.props.services.services)) {
            content = <ServiceList services={this.props.services.services} />
        }

        return (
            <div id="service-list-panel" className="page__default section">
                <div className="section-header__2">
                    <h2>Services</h2>
                </div>
                <div>
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
    // Fetched services
    services: PropTypes.object.isRequired,
}
export default ServiceListPanel;
