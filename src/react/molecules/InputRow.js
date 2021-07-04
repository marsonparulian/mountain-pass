// Group 1 logical input. Usually 1 input element and a label
import React from "react";
import PropTypes from "prop-types";

const InputRow = (props) => {
    return (
        <div>
            <label for={props.for} >{props.labelText}</label>
            {props.children}
        </div>
    )
}
InputRow.propTypes = {
    for: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
}

export default InputRow;
