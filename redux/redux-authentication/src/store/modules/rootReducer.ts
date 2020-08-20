import { combineReducers } from "redux"

import auth from './auth/reducer'
import { StoreState } from "../createStore"

export default combineReducers<StoreState>({
  auth: auth
})
