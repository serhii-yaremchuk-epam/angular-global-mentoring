import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { FakeLogoComponent } from './ui/header/fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './ui/header/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './ui/footer/footer.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';


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
    RouterModule
  ]
})
export class CoreModule {
}
