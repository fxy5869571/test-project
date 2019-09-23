import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = lazy(() => import('./containers/App'));

const Root = ({ store }) => (
    <Provider store={store}>
        <Suspense fallback={<div></div>}>
            <Router>
                <Route path="/" component={App} />

            </Router>
        </Suspense>
    </Provider>
)

export default Root