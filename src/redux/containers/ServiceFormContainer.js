// Connect <ServiceForm /> 
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { hideServiceForm } from "../actions/serviceActions";
import ServiceForm from "../../react/organisms/ServiceForm";

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        handleCancel: hideServiceForm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);
