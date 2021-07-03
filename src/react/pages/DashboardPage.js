// Dashboard page
import React from "react";
import ServiceListTemplate from "../templates/ServiceListTemplate";
import ServiceFormTemplate from "../templates/ServiceFormTemplate";

class DashboardPage extends React.Component {

    render() {
        return (
            <div>
                <ServiceListTemplate />
                <ServiceFormTemplate />
            </div>
        )
    }
}
export default DashboardPage;
