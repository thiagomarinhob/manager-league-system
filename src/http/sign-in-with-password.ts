import { api } from "./api-client";

interface SignInWithPasswordRequest {
  email: string;
  password: string;
}

interface SignInWithPasswordResponse {
  access_token: string;
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest) {
  const result = await api
  .post("login", {
    json: {
      email,
      password
    }
  })
  .json<SignInWithPasswordResponse>();
  console.log("🚀 ~ result:", result)

  return result;
}
