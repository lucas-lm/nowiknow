import { action } from "typesafe-actions";

interface Credentials {
  email: string
  password: string
}

export function signInRequest({ email, password }: Credentials) {
  return action('@auth/SIGN_IN_REQUEST', { email, password })
}

export function signInSuccess({ token }: { token: string }) {
  return action('@auth/SIGN_IN_SUCCESS', { token })
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE')
}


// {
//   type: '@auth/SIGN_IN_REQUEST',
//   payload: { email, password }
// }