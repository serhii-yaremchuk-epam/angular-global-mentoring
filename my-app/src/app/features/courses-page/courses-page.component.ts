import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
  selector: 'cp-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  searchQuery = '';
  initialCourses!: Course[];
  courses!: Course[];

  ngOnInit(): void {
    const courseDate1 = new Date();
    const courseDate2 = new Date();
    courseDate1.setDate(courseDate1.getDate() - 10);
    courseDate2.setDate(courseDate2.getDate() + 10);

    this.initialCourses = this.courses = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
          'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
          'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
          'all courses offered during a particular semester.',
        creationDate: courseDate1,
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
        creationDate: courseDate2,
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
  }

  onFind() {
    this.courses = (new FilterPipe()).transform(this.initialCourses, this.searchQuery);
  }

  onLoadMore() {
    console.log('load more called');
  }

  onDelete(course: Course) {
    console.log(course.id);
  }

}
