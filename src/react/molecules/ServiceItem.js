// Component for each service (in service list)
import React from "react";
import PropTypes from "prop-types";

const ServiceItem = (props) => {

    return (
        <div className="service-item">
            <h3>{props.name}</h3>
            <div>version : {props.version}</div>
        </div>
    )
}
ServiceItem.propTypes = {
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
}
export default ServiceItem;
