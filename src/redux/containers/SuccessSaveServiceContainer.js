//  Container for <SuccessSaveService />
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { hideServiceForm } from "../actions/serviceActions";
import SuccessSaveService from "../../react/organisms/SuccessSaveService";

const mapStateToProps = state => {
    return {
        name: state.serviceForm.savedService.name,
        version: state.serviceForm.savedService.version,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onDismiss: hideServiceForm,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessSaveService);
