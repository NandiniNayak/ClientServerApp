import axios from "axios";
import { FETCH_USER } from "./types";
// create a action creator

const fetchUser = () => {
  axios.get("/api/current_user");
};
