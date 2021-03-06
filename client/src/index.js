// Note: webpack compiles both css and js files and while importing css files the extension is must, unlike js files
// import materializeCSS from "materialize-css/dist/css/materialize.min.css"; can be written as follows
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
// provider is a component that makes redux store accessible to every component in teh react App component
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// reduxThunk manages asynchronous state of the variable and pass reduxThunk to applyMiddleware
import reduxThunk from "redux-thunk";

import App from "./components/App";
// import reducers
import reducers from "./reducers";
// createStore contains a dummy reducer for now
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// react is hooked to redux using a provider component around react app component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
console.log("stripe key is", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is", process.env.NODE_ENV);
