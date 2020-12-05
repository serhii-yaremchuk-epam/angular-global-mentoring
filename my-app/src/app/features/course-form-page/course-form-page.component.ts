import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { CourseDataService } from '../courses-page/course-data.service';
import { Course } from '../../shared/models/course.model';
import { Subject } from 'rxjs';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { CourseFormModel } from '../../shared/models/course-form.model';

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
    private breadcrumbsService: BreadcrumbsService) {
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
    this.course = this.courseDataService.getCourseById(id);
    this.breadcrumbsService.setLastLabel(this.course.title);
  }

  private initCreateMode() {
    this.isEditMode = false;
    this.course = {
      title: '',
      description: '',
      duration: 0,
      creationDate: undefined,
    };
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    if (this.isEditMode) {
      this.courseDataService.updateCourse(this.course.id as string, this.course as Course);
    } else {
      this.courseDataService.createCourse(this.course as Course);
    }

    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
