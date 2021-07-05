// Template of service list
import React from "react";
import QuickLinksPanelContainer from "../../redux/containers/QuickLinksPanelContainer";
import ServiceListPanel from "../organisms/ServiceListPanel";

const ServiceListTemplate = () => {
    return (
        <div>
            <QuickLinksPanelContainer />
            <ServiceListPanel />
        </div>
    )
}

export default ServiceListTemplate;
