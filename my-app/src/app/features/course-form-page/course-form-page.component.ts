import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cp-course-form-page',
  templateUrl: './course-form-page.component.html',
  styleUrls: ['./course-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormPageComponent {
  public course = {
    title: '',
    description: '',
    duration: 0,
    creationDate: undefined,
  };

  onCancel() {
    console.log('onCancel');
  }

  onSave() {
    console.log('onSave');
  }
}
