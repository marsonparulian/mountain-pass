// Component to show list of service
import React from "react";
import propTypes from "prop-types";

const ServiceList = (props) => {
    return (
        <div>
            {props.services.map((service) => {
                return <div > {service.name}</div>
            })}
        </div>
    )
}
ServiceList.propTypes = {
    services: propTypes.array.isRequired,
}

export default ServiceList
