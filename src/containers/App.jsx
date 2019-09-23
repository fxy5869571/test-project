import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import { requestAppList, requestRecomend } from '../actions'
const mapStateToProps = (state) => {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        receiveAppList: bindActionCreators(requestAppList, dispatch),
        receiveRecomend: bindActionCreators(requestRecomend, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)