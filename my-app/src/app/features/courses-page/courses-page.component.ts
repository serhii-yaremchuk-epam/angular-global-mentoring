import { Component, OnInit } from '@angular/core';
import {Course} from '../../shared/models/course.model';

@Component({
  selector: 'cp-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public searchQuery = '';
  public courses!: Course[];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
          'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
          'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
          'all courses offered during a particular semester.',
        creationDate:  new Date(2020,10,4),
        duration: 3805
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
          'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
          'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
          'all courses offered during a particular semester.',
        creationDate:  new Date(20,10,5),
        duration: 4805
      },
      {
        id: '3',
        title: 'Video Course 3. Name tag',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
          'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
          'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
          'all courses offered during a particular semester.',
        creationDate:  new Date(20,10,8),
        duration: 5805
      }
    ];
  }

  onFind() {
    console.log(this.searchQuery);
  }

  onLoadMore() {
    console.log('load more called');
  }

  onDelete(course: Course) {
    console.log(course.id);
  }

}
