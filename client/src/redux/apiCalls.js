import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logOut());
}

export const register = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/auth/register", user)
    dispatch(loginSuccess(res.data))
  }
  catch (err) {
    console.log(err)
  }
}