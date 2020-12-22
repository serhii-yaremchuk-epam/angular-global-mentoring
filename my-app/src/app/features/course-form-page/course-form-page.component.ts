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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'cp-course-form-page',
  templateUrl: './course-form-page.component.html',
  styleUrls: ['./course-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormPageComponent implements OnInit, OnDestroy {
  isEditMode = false;
  course!: CourseFormModel | Course;
  authors: Author[] = [];
  form!: FormGroup;

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
    this.initForm();
    this.selectRequiredData();
    this.initMode();
    this.route.paramMap
      .pipe(
        takeUntil(this.unsubscribe),
        map(params => {
          return params.get('id')
        })
      )
      .subscribe(this.initMode.bind(this));

    this.courseDataService.loadAuthors();
  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      length: new FormControl(0, Validators.required),
      date: new FormControl(new Date(), Validators.required),
      authors: new FormControl([]),
    });
  }

  private selectRequiredData() {
    this.store.select('courses', 'current')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(course => {
        if (!course) {
          return;
        }

        this.course = course;
        this.form.patchValue(course);
        this.breadcrumbsService.setLastLabel(course.name);
        this.cd.markForCheck();
      });

    this.store.select('courses', 'authors')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(authors => {
        this.authors = authors || [];
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
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const course = this.form.value as Course;
    if (this.isEditMode) {
      this.courseDataService.updateCourse({...course, ...{id: this.course.id}} as Course);
    } else {
      this.courseDataService.createCourse(course as Course);
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
