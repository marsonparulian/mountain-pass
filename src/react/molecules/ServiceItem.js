// Component for each service (in service list)
import React from "react";
import PropTypes from "prop-types";

const ServiceItem = (props) => {

    return (
        <div >
            <div>{props.name}</div>
            <div>version : {props.version}</div>
        </div>
    )
}
ServiceItem.propTypes = {
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
}
export default ServiceItem;
