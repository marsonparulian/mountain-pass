// Standard text input 
import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
    return (
        <input {...props} />
    )
}
Input.propTypes = {
    value: PropTypes.string.isRequired
}

export default Input;
