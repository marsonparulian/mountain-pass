// Connect <ServiceListFilter />
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateQuery } from "../actions/serviceListActions";
import ServiceListFilter from "../../react/molecules/ServiceListFilter";

const mapStateToProps = (state) => {
    return {
        query: state.serviceListPanel.serviceListFilter.query,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        handleChange: updateQuery,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListFilter);
