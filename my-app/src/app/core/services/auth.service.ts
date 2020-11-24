import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../../shared/constants/auth.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  login(): void {
    const fakeUser: User = {
      firstName: 'Fake',
      lastName: 'User',
      id: '1'
    };

    localStorage.setItem(AUTH_TOKEN_KEY, 'fakeToken');
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(fakeUser));
    this.router.navigate(['']);
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
}
