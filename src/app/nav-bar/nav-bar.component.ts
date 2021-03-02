import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  currentUser?: User;
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }



}
