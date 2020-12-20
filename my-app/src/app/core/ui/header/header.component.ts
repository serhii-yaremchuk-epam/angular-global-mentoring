import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../../shared/models/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'cp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$!: Observable<User>;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.authService.loadUser();
  }

}
