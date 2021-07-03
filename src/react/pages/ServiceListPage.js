// Page of service list
import React from "react";
import ServiceListTemplate from "../templates/ServiceListTemplate";
import ServiceFormTemplate from "../templates/ServiceFormTemplate";

class ServiceListPage extends React.Component {

    render() {
        return (
            <div>
                <ServiceListTemplate />
                <ServiceFormTemplate />
            </div>
        )
    }
}
export default ServiceListPage;
