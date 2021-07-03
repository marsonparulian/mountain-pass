// Service Form
import React from "react";
import Button from "../atoms/Button";

class ServiceForm extends React.Component {

    render() {
        return (
            <div>
                <h2>Service</h2>
                <form>

                    <div>
                        <Button>Cancel</Button>
                        <Button>Add Service</Button>
                    </div>
                </form>
            </div>
        )
    }
}
export default ServiceForm;
