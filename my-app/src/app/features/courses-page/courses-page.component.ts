import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { CourseDataService } from './course-data.service';
import { Subject } from 'rxjs';
import { CoursesListParams } from '../../shared/models/courses-list-params.model';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'cp-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  searchQuery = '';
  courses: Course[] = [];
  isLastPage = false;

  private searchChanged$ = new Subject<string>();

  private readonly initialListParams: CoursesListParams = {
    start: 0,
    count: 10,
    sort: 'date'
  };
  private listParams: CoursesListParams = this.initialListParams;
  private unsubscribe = new Subject();

  constructor(private courseDataService: CourseDataService) {
  }

  ngOnInit(): void {
    this.refreshList();
    this.searchChanged$.pipe(
      filter(searchQuery => {
        return searchQuery.length >= 3 || searchQuery.length === 0;
      }),
      debounceTime(250),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.search();
    })
  }

  search() {
    this.refreshList({textFragment: this.searchQuery});
  }

  onLoadMore() {
    this.listParams.start = (this.listParams.start as number) + (this.listParams.count as number);
    this.getList().subscribe(courses => {
      this.isLastPage = courses.length < (this.listParams.count as number);
      this.courses = this.courses.concat(courses);
    });
  }

  private getList() {
    return this.courseDataService.getList(this.listParams);
  }

  private refreshList(params: CoursesListParams = {}) {
    this.isLastPage = false;
    this.listParams = {...this.initialListParams, ...params};

    this.getList().subscribe(courses => {
      this.courses = courses;
    });
  }

  onDelete(course: Course) {
    if (confirm('Do you really want to delete this course?')) {
      this.courseDataService.removeCourse(course.id as string).subscribe(this.refreshList.bind(this));
    }
  }

  onTypeSearch() {
    this.searchChanged$.next(this.searchQuery);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.searchChanged$.complete();
  }

}
