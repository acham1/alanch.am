import React from "react";
import ReactDOM from "react-dom";
import * as redux from "redux";
import * as reactRedux from "react-redux";
import "./index.css";
import App from "./app/common/App";

const reduxStore = redux.createStore((previousState, action) => previousState);

ReactDOM.render(
  <reactRedux.Provider store={reduxStore}>
    <App />
  </reactRedux.Provider>,
  document.getElementById("root")
);
