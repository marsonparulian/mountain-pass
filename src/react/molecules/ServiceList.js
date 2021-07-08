// Component to show list of service
import React from "react";
import propTypes from "prop-types";
import ServiceItem from "./ServiceItem";

const ServiceList = (props) => {
    // Used as key in service list
    let serviceCounter = 1;

    return (
        <div className="group">
            {props.services.map((service) => {
                return <ServiceItem key={serviceCounter++} name={service.name} version={service.version} />
            })}
        </div>
    )
}
ServiceList.propTypes = {
    services: propTypes.array.isRequired,
}

export default ServiceList
