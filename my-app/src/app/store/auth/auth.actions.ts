import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user.model';

export const LoginStart = createAction('[Auth] Login Start', props<{email: string, password: string}>());
export const LoadUser = createAction('[Auth] LoadUser');
export const UserLoaded = createAction('[Auth] User Loaded', props<{user: User}>());

export interface LoginStartPayload {
  type: string;
  email: string;
  password: string;
}
