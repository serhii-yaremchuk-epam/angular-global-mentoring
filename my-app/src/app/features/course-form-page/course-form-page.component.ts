import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { CourseDataService } from '../courses-page/course-data.service';
import { Course } from '../../shared/models/course.model';
import { Subject } from 'rxjs';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';

@Component({
  selector: 'cp-course-form-page',
  templateUrl: './course-form-page.component.html',
  styleUrls: ['./course-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormPageComponent implements OnInit, OnDestroy {
  isEditMode = false;
  course!: CourseFormModel | Course;

  private unsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseDataService: CourseDataService,
    private breadcrumbsService: BreadcrumbsService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.initMode();
    this.route.paramMap
      .pipe(
        takeUntil(this.unsubscribe),
        map(params => {
          return params.get('id')
        })
      )
      .subscribe(this.initMode.bind(this));
  }

  private initMode(id?: string | null) {
    if (id) {
      this.initEditMode(id);
    } else {
      this.initCreateMode();
    }
  }

  private initEditMode(id: string) {
    this.isEditMode = true;
    this.courseDataService.getCourseById(id).subscribe(course => {
      this.course = course;
      this.breadcrumbsService.setLastLabel(this.course.name);
      this.cd.markForCheck();
    });
  }

  private initCreateMode() {
    this.isEditMode = false;
    this.course = {
      name: '',
      description: '',
      length: 0,
      date: new Date(),
    };
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    let courseAction$;
    if (this.isEditMode) {
      courseAction$ = this.courseDataService.updateCourse(this.course.id as string, this.course as Course);
    } else {
      courseAction$ = this.courseDataService.createCourse(this.course as Course);
    }

    courseAction$.subscribe(course => {
      this.router.navigate(['/courses']);
    })
  }

  onFormDateChange(date: string) {
    this.course.date = new Date(date);
  }

  onDurationChange(length: number) {
    this.course.length = length;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

interface CourseFormModel {
  id?: string,
  name: string,
  description: string,
  length: number,
  date: Date,
}
