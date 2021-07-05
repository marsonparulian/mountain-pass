// Connect DashboardPage component
import { connect } from "react-redux";
import DashboardPage from "../../react/pages/DashboardPage";

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
