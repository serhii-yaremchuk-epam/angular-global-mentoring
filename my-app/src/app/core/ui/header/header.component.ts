import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { LoadUser } from '../../../store/auth/auth.actions';

@Component({
  selector: 'cp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$!: Observable<User | undefined>;

  constructor(public authService: AuthService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.user$ = this.store.select('auth', 'user');
    this.store.dispatch(LoadUser());
  }

}
