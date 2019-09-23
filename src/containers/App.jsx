import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import { requestAppList, requestRecomend, requestSearchApp } from '../actions'
const mapStateToProps = (state) => {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        requestSearchApp: bindActionCreators(requestSearchApp, dispatch),
        requestAppList: bindActionCreators(requestAppList, dispatch),
        requestRecomend: bindActionCreators(requestRecomend, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)