import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''   
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.authenticationService.isLoggedIn = false;
    this.router.navigate(['signin']);
  }

}
