import React, { Component } from "react";
// to connect a component to redux store:
// step1: import connect
import { connect } from "react-redux";
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
        return (
          <li>
            <a href="auth/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="left brand-logo">
              Emaily
            </a>
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
