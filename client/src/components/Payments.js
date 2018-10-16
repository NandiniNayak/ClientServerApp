import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  // token s expecting to receive callback function that will be called after receiving suthorised token from stripe
  // add debugger to chcek js code generated at this point
  // notice the token in console logged
  // StripeChecout is a component which accepts additional props like name and description
  // replace stripe button with a custom element as child component: eg: button
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
