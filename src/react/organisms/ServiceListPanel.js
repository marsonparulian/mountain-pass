// Service List Panel, including filter, control buttons, and list of service
import React from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";

class ServiceListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddService = this.handleAddService.bind(this);
    }
    // Handle `Add Service` button click
    handleAddService() {
        this.props.handleAddService();
    }
    render() {
        return (
            <div id="service-list-panel">
                <div>
                    <Button
                        onClick={this.handleAddService}>
                        Add Service
                    </Button>
                </div>
                <div>
                    list of service
                </div>
                <Button
                    onClick={this.handleAddService}>
                    Add Service
                </Button>
            </div>
        )
    }
}
ServiceListPanel.propTypes = {
    handleAddService: PropTypes.func.isRequired
}
export default ServiceListPanel;
