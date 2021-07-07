import React from "react";
import PropTypes from "prop-types";
import BigButton from "../atoms/BigButton";

const QuickLinksPanel = (props) => {
    return (
        <div id="quick-links">
            <div className="section-header__1">
                <h2>Quick Links</h2>
            </div>
            <div>
                <BigButton
                    type="button"
                    onClick={props.handleAddService}>
                    Add Service
                </BigButton>
                <BigButton>Deploy Gatsby Website</BigButton>
                <BigButton>Deploy Node Project</BigButton>
            </div>
        </div>
    )
}

QuickLinksPanel.propTypes = {
    handleAddService: PropTypes.func.isRequired
}
export default QuickLinksPanel;
