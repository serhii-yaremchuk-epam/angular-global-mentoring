import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { CourseDataService } from '../courses-page/course-data.service';
import { Course } from '../../shared/models/course.model';
import { Subject } from 'rxjs';
import { CourseFormModel } from '../../shared/models/course-form.model';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

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
    private cd: ChangeDetectorRef,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.selectCurrentCourse();
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

  private selectCurrentCourse() {
    this.store.select('courses', 'current')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(course => {
        if (!course) {
          return;
        }

        this.course = {...course};
        this.breadcrumbsService.setLastLabel(this.course.name);
        this.cd.markForCheck();
      });
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
    this.courseDataService.loadCourseById(id);
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
    if (this.isEditMode) {
      this.courseDataService.updateCourse(this.course as Course);
    } else {
      this.courseDataService.createCourse(this.course as Course);
    }
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
