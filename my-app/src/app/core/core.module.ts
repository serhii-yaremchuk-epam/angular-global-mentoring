import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FakeLogoComponent } from './header/fake-logo/fake-logo.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, FakeLogoComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
