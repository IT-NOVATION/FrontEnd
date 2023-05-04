import { ISignupFormFirst } from "../interfaces/forms";
import { baseApi } from "./instance";

const SIGNUP_URI = "/api/v1/signup";

export const postSignup = (signupFormFirst: ISignupFormFirst) =>
  baseApi.post("/").then((res) => res.data);
