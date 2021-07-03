// Template of service list
import React from "react";
import QuickLinksPanel from "../organisms/QuickLinksPanel";
import ServiceListPanel from "../organisms/ServiceListPanel";

const ServiceListTemplate = () => {
    return (
        <div>
            <QuickLinksPanel />
            <ServiceListPanel />
        </div>
    )
}

export default ServiceListTemplate;
