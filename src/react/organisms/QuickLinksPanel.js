import React from "react";
import BigButton from "../atoms/BigButton";

const QuickLinksPanel = () => {
    return (
        <div id="quick-links">
            <h2>Quick Links</h2>
            <div>
                <BigButton>Add Service</BigButton>
                <BigButton>Deploy Gatsby Website</BigButton>
                <BigButton>Deploy Node Project</BigButton>
            </div>
        </div>
    )
}

export default QuickLinksPanel;
