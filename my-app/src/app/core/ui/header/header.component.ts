import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { LoadUser } from '../../../store/auth/auth.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$!: Observable<User | undefined>;
  languageForm = new FormGroup({
    language: new FormControl('en')
  });

  constructor(public authService: AuthService, private store: Store<AppState>, private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.user$ = this.store.select('auth', 'user');
    this.store.dispatch(LoadUser());

    (this.languageForm.get('language') as FormControl).valueChanges.subscribe(language => {
      this.translateService.use(language);
    })
  }

}
