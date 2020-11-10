import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { CourseDataService } from './course-data.service';

@Component({
  selector: 'cp-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  searchQuery = '';
  initialCourses!: Course[];
  courses!: Course[];

  constructor(private courseDataService: CourseDataService) {
  }

  ngOnInit(): void {
    this.initialCourses = this.courses = this.courseDataService.getList();
  }

  onFind() {
    this.courses = (new FilterPipe()).transform(this.initialCourses, this.searchQuery);
  }

  onLoadMore() {
    console.log('load more called');
  }

  onDelete(course: Course) {
    if (confirm('Do you really want to delete this course?')) {
      this.courseDataService.removeCourse(course.id);
    }
  }

}
