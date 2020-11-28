import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { CourseApiService } from '../../core/api/course-api.service';
import { Observable } from 'rxjs';
import { CoursesListParams } from '../../shared/models/courses-list-params.model';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  constructor(private courseApi: CourseApiService) {
  }

  getList(params: CoursesListParams): Observable<Course[]> {
    return this.courseApi.getCourses(params);
  }

  createCourse(course: Course): Observable<Course> {
    return this.courseApi.createCourse(course);
  }

  getCourseById(id: string): Observable<Course> {
    return this.courseApi.getById(id);
  }

  updateCourse(id: string, course: Course) {
    return this.courseApi.updateCourse(id, course);
  }

  removeCourse(id: string) {
    return this.courseApi.removeCourse(id);
  }

}
