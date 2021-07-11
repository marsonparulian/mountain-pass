// Service filter form 
import React from "react";
import PropTypes from "prop-types";
class ServiceListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.updateQuery = this.updateQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateQuery(e) {
        e.preventDefault();
        // Query
        const q = e.target.value;
        this.props.handleChange(q);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.props.query);
    }
    render() {


        // Render
        return (
            <form
                method="POST"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    name="query"
                    value={this.props.query}
                    onChange={this.updateQuery}
                    placeholder="Filter service"
                />
            </form>
        )
    }
}

ServiceListFilter.propTypes = {
    query: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}
export default ServiceListFilter
