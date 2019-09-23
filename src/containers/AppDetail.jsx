import AppDetail from "../components/AppDetail";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestAppDetail } from "../actions";

const mapStateToProps = ({ appDetail }) => {
    return { appDetail }
}
function mapDispatchToProps(dispatch) {
    return {
        requestAppDetail: bindActionCreators(requestAppDetail, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppDetail)