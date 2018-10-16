import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  // token s expecting to receive callback function that will be called after receiving suthorised token from stripe
  // add debugger to chcek js code generated at this point
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
