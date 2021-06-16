import { createAction, props } from '@ngrx/store';
import { Course } from '../../shared/models/course.model';
import { Author } from '../../shared/models/author.model';

export const CoursesLoaded = createAction('[Courses] Courses Loaded', props<{courses: Course[]}>());
export const MoreCoursesLoaded = createAction('[Courses] More Courses Loaded', props<{courses: Course[]}>());
export const CourseRemoved = createAction('[Courses] Courses Removed', props<{id: number}>());
export const CourseLoaded = createAction('[Courses] Courses Loaded', props<{course: Course}>());
export const CourseUpdated = createAction('[Courses] Courses Updated', props<{course: Course}>());
export const CourseCreated = createAction('[Courses] Courses Created', props<{course: Course}>());
export const AuthorsLoaded = createAction('[Courses] Authors Loaded', props<{authors: Author[]}>());
