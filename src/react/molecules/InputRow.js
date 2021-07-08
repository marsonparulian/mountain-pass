// Group 1 logical input. Usually 1 input element and a label
import React from "react";
import PropTypes from "prop-types";

/**
 * @unused
 */
const InputRow = (props) => {
    return (
        <div
            className="form-group"
        >
            <label htmlFor={props.for} >{props.labelText}</label>
            {props.children}
        </div >
    )
}
InputRow.propTypes = {
    for: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}

export default InputRow;
