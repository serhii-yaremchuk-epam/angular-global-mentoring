import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CourseCreated, CourseUpdated } from './courses.actions';

@Injectable()
export class CourseEffects {
  @Effect({ dispatch: false })
  redirectToListPage = this.actions$.pipe(
    ofType(CourseUpdated, CourseCreated),
    tap(() => {
      this.router.navigate(['/courses'])
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {
  }
}
