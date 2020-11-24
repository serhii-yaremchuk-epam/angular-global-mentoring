import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'cp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user!: User;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserInfo();
  }
}
