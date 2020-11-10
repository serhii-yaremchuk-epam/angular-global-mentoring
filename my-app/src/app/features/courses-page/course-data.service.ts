import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  private static courses = [
    {
      id: '1',
      title: 'Video Course 1. Name tag',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
        'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
        'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
        'all courses offered during a particular semester.',
      creationDate: new Date(),
      duration: 3805,
      topRated: true
    },
    {
      id: '2',
      title: 'Video Course 2. Name tag',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
        'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
        'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
        'all courses offered during a particular semester.',
      creationDate: new Date(),
      duration: 600
    },
    {
      id: '3',
      title: 'Video Course 3. Name tag',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
        'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
        'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
        'all courses offered during a particular semester.',
      creationDate: new Date(2020, 10, 8),
      duration: 5805
    }
  ];

  constructor() {
  }

  getList(): Course[] {
    return CourseDataService.courses;
  }

  createCourse(course: Course): void {
    CourseDataService.courses.push(course);
  }

  getCourseById(id: string): Course | undefined {
    return this.getList().find(courseItem => courseItem.id === id);
  }

  updateCourse(id: string, course: Course) {
  }

  removeCourse(id: string) {
    const idx = this.getList().findIndex(courseItem => courseItem.id === id);
    if (idx === -1) {
      return console.error(`Course with id ${id} not found`);
    }

    CourseDataService.courses.splice(idx, 1);
  }

}
