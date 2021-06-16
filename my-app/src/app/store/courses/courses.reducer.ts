import { createReducer, on } from '@ngrx/store';
import { Course } from '../../shared/models/course.model';
import { AuthorsLoaded, CourseLoaded, CourseRemoved, CoursesLoaded, CourseUpdated, MoreCoursesLoaded } from './courses.actions';
import { Author } from '../../shared/models/author.model';

export interface CoursesState {
  all: Course[],
  current?: Course,
  authors?: Author[],
}

const initialState: CoursesState = {
  all: [],
  current: undefined,
  authors: [],
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
  }),
  on(AuthorsLoaded, (state, {authors}) => {
    return {
      ...state,
      ...{authors}
    }
  })
)
