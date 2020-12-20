import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderActive$ = new ReplaySubject<boolean>();

  show() {
    this.loaderActive$.next(true);
  }

  hide() {
    this.loaderActive$.next(false);
  }
}
