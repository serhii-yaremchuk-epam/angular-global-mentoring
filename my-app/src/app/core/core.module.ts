import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { FakeLogoComponent } from './ui/header/fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './ui/header/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './ui/footer/footer.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { LoaderComponent } from './ui/loader/loader.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent,
    BreadcrumbsComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule {
}
