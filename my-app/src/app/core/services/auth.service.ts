import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../../shared/constants/auth.constants';
import { Router } from '@angular/router';
import { AuthApiService } from '../api/auth-api.service';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private authApi: AuthApiService) { }

  get token(): string {
    return localStorage.getItem(AUTH_TOKEN_KEY) as string;
  }

  login(login: string, password: string): void {
    this.authApi.login(login, password).pipe(
      mergeMap(({token}) => {
        localStorage.setItem(AUTH_TOKEN_KEY, token);
        return this.storeUserInfo();
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

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem(AUTH_USER_KEY) as string);
  }

  private storeUserInfo(): Observable<any> {
    return this.authApi.getUserInfo(this.token).pipe(
      tap((user) => {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      })
    );
  }
}
