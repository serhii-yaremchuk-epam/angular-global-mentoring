import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/ui/header/header.component';
import { FakeLogoComponent } from './core/ui/header/fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './core/ui/header/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './core/ui/footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FakeLogoComponent,
        BreadcrumbsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
