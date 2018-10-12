import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// create some dummy component

const Header = () => <h2> Header </h2>;
const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;
const Landing = () => <h2> Landing </h2>;

const App = () => {
  /* note: Browser router takes only one  child component: you cannot have two div's
  2. Route component indicates when the user visits the root path show the landing component
  3. If the routes components are added one below the other both component apear on the route, to avoid this pass another property called exact={true} or just exact
  4. header is not specific to path it appears on every path, hence use it like any other component*/

  return (
    <div>
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
};

export default App;
