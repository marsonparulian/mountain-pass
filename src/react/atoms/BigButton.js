// Big Buttons
import React from "react";
import PropTypes from "prop-types";

const BigButton = (props) => {
    return (
        <button>{props.children}</button>
    )
}

BigButton.propTypes = {
    children: PropTypes.string.isRequired
}

export default BigButton;
