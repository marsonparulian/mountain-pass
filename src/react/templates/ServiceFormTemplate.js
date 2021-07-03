// Service Form template
import React from "react";
import ReactModal from "react-modal";
import ServiceForm from "../organisms/ServiceForm";

class ServiceFormTemplate extends React.Component {
    constructor(props) {
        super(props);

        // For accessibility. Read : https://reactcommunity.org/react-modal/accessibility/
        // Note: `#app` will trigger `element not found` with @testing-library/react. `div` selector will select the first <div />
        ReactModal.setAppElement("div");
    }
    render() {
        // Content of dialog
        let content = "loading..";

        // If Dialog is open, mount Service Form
        if (this.props.isDialogOpen) {
            content = <ServiceForm />
        }

        return (
            <ReactModal
                contentLabel="New Service"
                isOpen={true}>
                {content}
            </ReactModal>
        )
    }
}

// Default props
ServiceFormTemplate.defaultProps = {
    // is the dialog containing Service Form open or not
    isDialogOpen: false
}

export default ServiceFormTemplate;
