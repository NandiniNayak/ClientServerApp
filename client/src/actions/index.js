import axios from "axios";
import { FETCH_USER } from "./types";
// create a action creator

export const fetchUser = () => {
  // return a action
  return function(dispatch) {
    axios.get("/auth/api/current_user").then(res => {
      /* step1: dispatch an action with type and payload
      step2: note: in the payload the only infot hat is relavent is data hence pass res.data */
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};
