import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../shared/models/user.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user!: User;
  private unsubscribe = new Subject();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.pipe(takeUntil(this.unsubscribe)).subscribe(user => {
      this.user = user;
    });

    this.authService.loadUser();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
