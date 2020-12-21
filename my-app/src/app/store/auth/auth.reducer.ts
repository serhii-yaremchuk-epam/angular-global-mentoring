import { User } from '../../shared/models/user.model';
import { createReducer, createSelector, on } from '@ngrx/store';
import { UserLoaded } from './auth.actions';

export interface AuthState {
  user?: User
}

const initialState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialState,
  on(UserLoaded, (state, {user}) => {
    return {
      ...state,
      ...{user}
    }
  })
)
