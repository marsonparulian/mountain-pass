// Template of service list
import React from "react";
import QuickLinksPanelContainer from "../../redux/containers/QuickLinksPanelContainer";
import ServiceListPanelContainer from "../../redux/containers/ServiceListPanelContainer";

const ServiceListTemplate = () => {
    return (
        <div >
            <QuickLinksPanelContainer />
            <ServiceListPanelContainer />
        </div>
    )
}

export default ServiceListTemplate;
