import { Injectable } from '@angular/core';
import { CoreApiService } from './core-api.service';
import { Observable } from 'rxjs';
import { Course } from '../../shared/models/course.model';
import { CoursesListParams } from '../../shared/models/courses-list-params.model';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService extends CoreApiService {

  getCourses(params: CoursesListParams): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}courses`, {
      params: params as any
    })
  }

  removeCourse(id: string): Observable<any> {
    return this.http.delete<any>( `${this.baseUrl}courses/${id}`);
  }

  getById(id: string): Observable<Course> {
    return this.http.get<Course>( `${this.baseUrl}courses/${id}`);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>( `${this.baseUrl}courses`, course);
  }

  updateCourse(id: string, course: Course): Observable<Course> {
    return this.http.patch<Course>( `${this.baseUrl}courses/${id}`, course);
  }

}

