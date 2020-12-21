import { ActionReducerMap } from '@ngrx/store';
import { authReducer as auth, AuthState } from './auth/auth.reducer';
import { coursesReducer as courses, CoursesState } from './courses/courses.reducer';

export interface AppState {
  auth: AuthState,
  courses: CoursesState
}

export const appReducer: ActionReducerMap<AppState> = {
  auth,
  courses
}
