import { ISignupForm } from "../interfaces/forms";
import { baseApi } from "./instance";

const SIGNUP_URI = "/api/v1/signup";

export const postSignup = (signupFormFirst: ISignupForm) =>
  baseApi.post("/").then((res) => res.data);
