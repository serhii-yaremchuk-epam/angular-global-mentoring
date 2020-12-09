import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderActive$ = new Subject<boolean>();

  show() {
    this.loaderActive$.next(true);
  }

  hide() {
    this.loaderActive$.next(false);
  }
}
