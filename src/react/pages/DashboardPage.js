// Dashboard page
import React from "react";
import PropTypes from "prop-types";
import ServiceListTemplate from "../templates/ServiceListTemplate";
import ServiceFormTemplate from "../templates/ServiceFormTemplate";

class DashboardPage extends React.Component {

    render() {
        return (
            <div>
                <ServiceListTemplate />
                <ServiceFormTemplate isOpen={this.props.app.showModal} />
            </div>
        )
    }
}

DashboardPage.propTypes = {
    // Will show form (in modal)
    showServiceForm: PropTypes.bool
}

// Default props
DashboardPage.defaultProps = {
    showServiceForm: false
}

export default DashboardPage;
