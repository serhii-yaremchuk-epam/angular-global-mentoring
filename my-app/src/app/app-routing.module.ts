import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesPageComponent} from './features/courses-page/courses-page.component';
import { LoginPageComponent } from './core/ui/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  { path: '**', redirectTo: '/courses' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
