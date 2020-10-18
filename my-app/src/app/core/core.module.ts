import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './header/fake-logo/fake-logo.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
