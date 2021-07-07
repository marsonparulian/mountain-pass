// Service Form
import React from "react";
import propTypes from "prop-types";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import InputRow from "../molecules/InputRow";

class ServiceForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.updateFieldValue = this.updateFieldValue.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
    // Handle `Cancel` button
    handleCancel() {
        this.props.handleCancel();
    }
    // Handle change of afield's value
    updateFieldValue(name, e) {
        this.props.updateFieldValue(
            name,
            e.target.value
        );
    }
    // Submit form
    handleSubmitForm(e) {
        e.preventDefault();

        // Prepare data
        const fields = this.props.serviceForm.fields;
        const data = {
            name: fields.name.value,
            version: fields.version.value,
        }
        // action
        console.log("checking props..", this.props);
        console.log("before saving..", data);
        this.props.saveService(data);
    }
    render() {
        // Form fields
        const fields = this.props.serviceForm.fields;

        return (
            <div>
                <h1>Add Service</h1>
                <form method="POST" onSubmit={this.handleSubmitForm}>

                    <InputRow
                        labelText="Name"
                        for="name">
                        <Input
                            name="name"
                            id="name"
                            value={fields.name.value}
                            onChange={(e) => this.updateFieldValue("name", e)}
                        />
                    </InputRow>

                    <InputRow
                        labelText="Version"
                        for="version">
                        <Input
                            name="version"
                            id="version"
                            value={fields.version.value}
                            onChange={(e) => this.updateFieldValue("version", e)}
                        />
                    </InputRow>


                    <div>
                        <Button
                            type="button"
                            onClick={this.handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit">
                            Add Service
                        </Button>
                    </div>
                </form>
            </div >
        )
    }
}
ServiceForm.propTypes = {
    saveService: propTypes.func.isRequired,
}
export default ServiceForm;
