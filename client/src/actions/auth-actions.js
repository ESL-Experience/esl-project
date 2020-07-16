import axios from "axios";
import { SET_CURRENT_USER } from "./types";
export const setCurrentUser = () => dispatch => {
  axios
    .get("/auth/current_user")
    .then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};