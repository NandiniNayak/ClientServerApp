import { FETCH_USER } from "../actions/types";

/* reducer returns
1. null if user not logged in
2. user model if logged in
3. false if user ahs logged out*/
export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      /* if user logged in return payload
      note: if user ahs logged out payload will be empty string which is indicated as false */
      return action.payload || false;
    default:
      return state;
  }
}
