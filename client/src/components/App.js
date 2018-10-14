import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// connect helper method allows access to react-redux action
import { connect } from "react-redux";
import * as actions from "../actions";
// create some dummy component

// const Header = () => <h2> Header </h2>;
import Header from "./Header";
const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;
const Landing = () => <h2> Landing </h2>;

class App extends Component {
  /* note: Browser router takes only one  child component: you cannot have two div's
  2. Route component indicates when the user visits the root path show the landing component
  3. If the routes components are added one below the other both component apear on the route, to avoid this pass another property called exact={true} or just exact
  4. header is not specific to path it appears on every path, hence use it like any other component
  5. refactor the function to class amd add life cycle compinents*/
  componentDidMount() {
    // initial ajax request, recieve action creator from react-redux to fetch current user
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// actions are passed into the app component as prop
export default connect(
  null,
  actions
)(App);
