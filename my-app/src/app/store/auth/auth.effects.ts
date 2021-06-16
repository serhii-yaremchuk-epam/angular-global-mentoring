import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadUser, LoginStart, LoginStartPayload, UserLoaded } from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  loginStart = this.actions$.pipe(
    ofType(LoginStart.type),
    switchMap((action: LoginStartPayload) => {
      return this.authService.login(action.email, action.password);
    }),
    map(() => {
      this.router.navigate([''])
    })
  )

  @Effect()
  loadUser = this.actions$.pipe(
    ofType(LoadUser.type),
    switchMap(() => {
      return this.authService.loadUser();
    }),
    map(user => {
      return UserLoaded({user});
    })
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }
}
