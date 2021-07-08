// Component to show upon successfully save a service 
import React from "react";
import propTypes from "prop-types";
import Button from "../atoms/Button";

const SuccessSaveService = (props) => {
    return (
        <div>
            <h2>Saved</h2>
            <div>
                The following service has been successfully saved :
                <ol>
                    <li>Name: {props.name}</li>
                    <li>Version: {props.version}</li>
                </ol>
            </div>
            <Button
                className="btn btn-primary"
                onClick={props.onDismiss}
            >OK</Button>
        </div>
    )
}
SuccessSaveService.propTypes = {
    name: propTypes.string.isRequired,
    version: propTypes.string.isRequired,
    onDismiss: propTypes.func.isRequired,
}
export default SuccessSaveService;
