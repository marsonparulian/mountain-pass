// Container to connect QuickLinksPanel
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import QuickLinksPanel from "../../react/organisms/QuickLinksPanel";
import { showServiceForm } from "../actions/serviceActions";

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onAddService: showServiceForm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickLinksPanel);
