import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseFormPageComponent } from './course-form-page.component';
import { FormDateComponent } from './form-date/form-date.component';
import { FormDurationComponent } from './form-duration/form-duration.component';


@NgModule({
  declarations: [
    CourseFormPageComponent,
    FormDateComponent,
    FormDurationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class CourseFormPageModule {
}
