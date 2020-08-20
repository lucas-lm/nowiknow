import { takeLatest, call, put, all } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import * as actions from './actions'

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { email, password } = payload
    console.log(email, password)
    const { ok } = yield call(fetch, 'https://api.github.com/users')

    yield put(actions.signInSuccess({ token: ok }))
  } catch (error) {
    yield put(actions.signInFailure())
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
