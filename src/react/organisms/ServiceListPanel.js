// Service List Panel, including filter, control buttons, and list of service
import React from "react";
import Button from "../atoms/Button";

class ServiceListPanel extends React.Component {
    render() {
        return (
            <div id="service-list-panel">
                <div>
                    <Button>Add Service</Button>
                </div>
                <div>
                    // TODO list of service
                </div>
                <Button>Add Service</Button>
            </div>
        )
    }
}

export default ServiceListPanel;
