// Connect the ServiceListPanel component
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showServiceForm } from "../actions/serviceActions";
import { fetchServices, setFilteredServices } from "../actions/serviceListActions";
import ServiceListPanel from "../../react/organisms/ServiceListPanel";

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        handleAddService: showServiceForm,
        setFilteredServices,
        fetchServices,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListPanel);
