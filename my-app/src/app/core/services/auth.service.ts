import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../../shared/constants/auth.constants';
import { Router } from '@angular/router';
import { AuthApiService } from '../api/auth-api.service';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new Subject<User>();

  constructor(private router: Router, private authApi: AuthApiService) { }

  get token(): string {
    return localStorage.getItem(AUTH_TOKEN_KEY) as string;
  }

  login(login: string, password: string): void {
    this.authApi.login(login, password).pipe(
      tap(({token}) => {
        localStorage.setItem(AUTH_TOKEN_KEY, token);
      })
    ).subscribe(() => {
      this.router.navigate([''])
    });
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  }

  loadUser(): void {
    this.authApi.getUserInfo(this.token).subscribe((user) => {
      this.user$.next(user);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    });
  }
}
