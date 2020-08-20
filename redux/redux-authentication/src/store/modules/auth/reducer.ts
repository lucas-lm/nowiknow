import { AuthState, AuthAction } from "./types"

const initialState: AuthState = { isLoading: false, isAuthenticated: false, error: false }

export default function auth(state=initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return { ...state, isLoading: true }
    
    case '@auth/SIGN_IN_SUCCESS':
      return { ...state, isLoading: false, isAuthenticated: true }
  
    case '@auth/SIGN_IN_FAILURE':
      return { ...state, isLoading: false, isAuthenticated: false, error: true }

    default:
      return state
  }
}