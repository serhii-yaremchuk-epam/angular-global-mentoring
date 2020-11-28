import { Injectable } from '@angular/core';
import { CoreApiService } from './core-api.service';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends CoreApiService {
  login(login: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.baseUrl + 'auth/login', {
      login,
      password
    })
  }

  getUserInfo(token: string): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'auth/userinfo', {
      token,
    })
  }
}
