import App from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Route, Switch, Router } from "react-router-dom";
import createHashHistory from "history/createHashHistory";
import Home from "./components/Home";
import Login from "./components/Login";

const history = createHashHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
