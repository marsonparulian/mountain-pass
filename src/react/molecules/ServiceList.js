// Component to show list of service
import React from "react";
import propTypes from "prop-types";
import ServiceItem from "./ServiceItem";

const ServiceList = (props) => {
    return (
        <div>
            {props.services.map((service) => {
                return <ServiceItem key={service.name} name={service.name} version={service.version} />
            })}
        </div>
    )
}
ServiceList.propTypes = {
    services: propTypes.array.isRequired,
}

export default ServiceList
