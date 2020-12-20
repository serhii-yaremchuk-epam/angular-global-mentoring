import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { FakeLogoComponent } from './ui/header/fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './ui/header/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './ui/footer/footer.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent,
    BreadcrumbsComponent,
    LoginPageComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
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
