import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { LoginStart } from '../../../store/auth/auth.actions';

@Component({
  selector: 'cp-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router, private store: Store) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/courses']);
    }
  }

  login() {
    if (!this.email || !this.password) {
      return;
    }

    this.store.dispatch(LoginStart({
      email: this.email,
      password: this.password
    }));
  }
}
