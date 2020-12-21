import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AUTH_TOKEN_KEY } from '../../shared/constants/auth.constants';
import { Router } from '@angular/router';
import { AuthApiService } from '../api/auth-api.service';
import { Observable, Subject } from 'rxjs';
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

  login(login: string, password: string): Observable<any> {
    return this.authApi.login(login, password).pipe(
      tap(({token}) => {
        localStorage.setItem(AUTH_TOKEN_KEY, token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  }

  loadUser(): Observable<User> {
    return  this.authApi.getUserInfo(this.token);
  }
}
