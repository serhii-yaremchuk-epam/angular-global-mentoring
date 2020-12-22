import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseFormPageComponent } from './course-form-page.component';
import { FormDateComponent } from './form-date/form-date.component';
import { FormDurationComponent } from './form-duration/form-duration.component';
import { FormAuthorsComponent } from './form-authors/form-authors.component';


@NgModule({
  declarations: [
    CourseFormPageComponent,
    FormDateComponent,
    FormDurationComponent,
    FormAuthorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CourseFormPageModule {
}
