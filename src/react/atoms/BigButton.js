// Big Buttons
import React from "react";
import PropTypes from "prop-types";

const BigButton = (props) => {
    return (
        <button
            className="box btn btn-lg "
            {...props}>
            {props.children}
        </button>
    )
}

BigButton.propTypes = {
    children: PropTypes.string.isRequired
}

export default BigButton;
