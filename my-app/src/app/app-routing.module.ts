import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './features/courses-page/courses-page.component';
import { LoginPageComponent } from './core/ui/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CourseFormPageComponent } from './features/course-form-page/course-form-page.component';
import { PageNotFoundComponent } from './core/ui/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {
    path: 'courses',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      breadcrumb: 'Courses'
    },
    children: [
      {
        path: '',
        component: CoursesPageComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'new',
        component: CourseFormPageComponent,
        data: {
          breadcrumb: 'New Course'
        },
      },
      {
        path: ':id',
        component: CourseFormPageComponent,
        data: {
          breadcrumb: null
        },
      },
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
