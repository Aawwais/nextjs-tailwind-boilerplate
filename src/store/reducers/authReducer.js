import { setCookie } from "cookies-next";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  uid: null,
  counter: 0,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log("hello");
      return {
        ...state,
        counter: action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: action.payload,
      };
    case "LOGIN":
      setCookie("token", action.payload.token);
      return {
        ...state,
        user: action.payload.token,
        uid: action.payload.token.id,
      };
    case "LOGOUT":
      Cookies.remove("token");
      return {
        ...state,
        user: null,
        uid: null,
      };
    default:
      return {
        ...state,
      };
  }
}
