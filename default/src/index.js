import React from "react";
import ReactDOM from "react-dom";
import * as redux from "redux";
import * as reactRedux from "react-redux";
import "./index.css";
import App from "./app/common/App";

const initialState = { drawer: { open: false } };

const reduxStore = redux.createStore((previousState, action) => {
  const wasOpen = previousState.drawer.open;
  console.log(`REDUCING: was ${wasOpen}`);
  console.log("ACTION:", action);
  switch (action.type) {
    case "TOGGLE_DRAWER_OPEN":
      return { ...previousState, drawer: { open: !wasOpen } };
    default:
      return previousState;
  }
}, initialState);

ReactDOM.render(
  <reactRedux.Provider store={reduxStore}>
    <App />
  </reactRedux.Provider>,
  document.getElementById("root")
);
