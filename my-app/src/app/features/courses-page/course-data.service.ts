import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { CourseApiService } from '../../core/api/course-api.service';
import { Observable } from 'rxjs';
import { CoursesListParams } from '../../shared/models/courses-list-params.model';
import { Store } from '@ngrx/store';
import {
  AuthorsLoaded,
  CourseCreated,
  CourseLoaded,
  CourseRemoved,
  CoursesLoaded,
  CourseUpdated,
  MoreCoursesLoaded
} from '../../store/courses/courses.actions';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  constructor(private courseApi: CourseApiService, private store: Store) {
  }

  loadList(params: CoursesListParams): void {
    this.courseApi.getCourses(params).subscribe(courses => {
      this.store.dispatch(CoursesLoaded({courses}));
    });
  }

  loadMore(params: CoursesListParams): void {
    this.courseApi.getCourses(params).subscribe(courses => {
      this.store.dispatch(MoreCoursesLoaded({courses}));
    });
  }

  createCourse(course: Course): void {
    this.courseApi.createCourse(course).subscribe(() => {
      this.store.dispatch(CourseCreated({course}));
    });
  }

  loadCourseById(id: string): void {
    this.courseApi.getById(id).subscribe(course => {
      this.store.dispatch(CourseLoaded({course}));
    });
  }

  loadAuthors(): void {
    this.courseApi.getAuthors().subscribe(authors => {
      this.store.dispatch(AuthorsLoaded({authors}));
    });
  }

  updateCourse(course: Course): void {
    this.courseApi.updateCourse(course.id, course).subscribe(() => {
      this.store.dispatch(CourseUpdated({course}));
    });
  }

  removeCourse(id: string): void {
    this.courseApi.removeCourse(id).subscribe(() => {
      this.store.dispatch(CourseRemoved({id: +id}))
    });
  }

}
