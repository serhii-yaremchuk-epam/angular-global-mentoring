import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AUTH_TOKEN_KEY } from '../../shared/constants/auth.constants';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let updatedHeaders = request.headers;

    // set headers for API requests
    updatedHeaders = this.adjustForApi(updatedHeaders);

    return next.handle(request.clone({ headers: updatedHeaders })).pipe(
      catchError((response: any) => {
        alert(response.error);
        return throwError(response);
      }),
    )
  }

  private adjustForApi(updatedHeaders: HttpHeaders) {
    return updatedHeaders.set('Authorization', `Basic ${localStorage.getItem(AUTH_TOKEN_KEY)}`);
  }
}
