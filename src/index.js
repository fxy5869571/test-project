import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import Root from "./router";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware(RootSaga);
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
// 消除antd-mobile警告
console.warn = () => {};
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
