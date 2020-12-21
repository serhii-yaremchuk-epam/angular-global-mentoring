import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesPageModule } from './features/courses-page/courses-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseFormPageModule } from './features/course-form-page/course-form-page.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import { appReducer } from './store/app.reducer';
import { CourseEffects } from './store/courses/course.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesPageModule,
    CourseFormPageModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects, CourseEffects]),
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
