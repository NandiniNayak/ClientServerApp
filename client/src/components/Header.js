import React, { Component } from "react";
// to connect a component to redux store:
// step1: import connect
import { connect } from "react-redux";
// import link component from react router dom : link is like <a> tag but allows you to render a corresponding react router with a logic in place: eg: link clicked can take you to a corresponsing page based on if the user is logged in or not
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  // display content based on if user is oogged in or not
  renderConetnt() {
    // note: monitor how the state of the header transition from still deciding to logged in to logout: when the user logs in and logs out
    console.log(`the value of the auth state is: ${this.props.auth}`);
    switch (this.props.auth) {
      // if user not logged in
      case null:
        return "still deciding";
      // if logged out
      case false:
        // return "I am logged out";
        return (
          <li>
            <a href="/auth/google"> Login With Google</a>
          </li>
        );
      // if logged in
      default:
        // return "I am logged in";
        // return an array of li elements
        return (
          <ul>
            <li>
              <Payments />
            </li>
            <li>
              <a href="auth/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }
  render() {
    console.log(this.props);
    // add link to the brand with a logic to check if user logged in take to the dashboard else go to home page, hence instaed of a tag we need the logic in place which checks for users authentication
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/dashboard" : "/"}
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul id="nav-mobile" className="right">
              {this.renderConetnt()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
// step3: create an action mapStateToProps
function mapStateToProps({ auth }) {
  // return { auth: auth };
  return { auth };
}
// step2: export connect
export default connect(mapStateToProps)(Header);
