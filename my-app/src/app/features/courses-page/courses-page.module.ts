import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesPageComponent} from './courses-page.component';
import {FormsModule} from '@angular/forms';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesItemComponent
  ],
  exports: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class CoursesPageModule {
}
