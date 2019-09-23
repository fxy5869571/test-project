import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Icon } from 'antd-mobile'
const App = lazy(() => import('./containers/App'));
const AppDetail = lazy(() => import('./containers/AppDetail'));
const Root = ({ store }) => (
    <Provider store={store}>
        <Suspense fallback={<div className="loading-container"><Icon type="loading" className="loading"></Icon></div>}>
            <Router>
                <Route path="/" component={App} exact={true} />
                <Route path="/detail" component={AppDetail} />
            </Router>
        </Suspense>
    </Provider>
)

export default Root