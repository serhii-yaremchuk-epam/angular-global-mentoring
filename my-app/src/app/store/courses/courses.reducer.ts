import { createReducer, on } from '@ngrx/store';
import { Course } from '../../shared/models/course.model';
import { CourseLoaded, CourseRemoved, CoursesLoaded, CourseUpdated, MoreCoursesLoaded } from './courses.actions';

export interface CoursesState {
  all: Course[],
  current?: Course
}

const initialState: CoursesState = {
  all: [],
  current: undefined
}

export const coursesReducer = createReducer(
  initialState,
  on(CoursesLoaded, (state, {courses}) => {
    return {
      ...state,
      all: courses
    }
  }),
  on(MoreCoursesLoaded, (state, {courses}) => {
    return {
      ...state,
      all: [...state.all, ...courses]
    }
  }),
  on(CourseRemoved, (state, {id}) => {
    return {
      ...state,
      all: state.all.filter(course => +course.id !== id)
    }
  }),
  on(CourseLoaded, (state, {course}) => {
    return {
      ...state,
      ...{current: course}
    }
  }),
  on(CourseUpdated, (state, {course}) => {
    return {
      ...state,
      ...{current: course}
    }
  })
)
