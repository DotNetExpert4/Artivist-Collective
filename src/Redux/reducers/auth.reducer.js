import { ACTION_TYPES } from "./../actions/auth.action";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" ? true : false,
  accessToken: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : "",
};


export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        isLoggedIn: true,
        accessToken: state.accessToken,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        isLoggedIn: false,
        accessToken: "",
      };
    default:
      return state;
  }
};
