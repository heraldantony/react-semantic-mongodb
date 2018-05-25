// @flow
import { post } from "api/utils";

export type SignupDataType = {
  email: string,
  password: string
};

export async function signupAPI(data: SignupDataType) {
  return post("/signup", data);
}
