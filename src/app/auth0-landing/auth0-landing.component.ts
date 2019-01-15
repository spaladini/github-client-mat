import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0Service } from '../services/auth0.service';

@Component({
  selector: 'app-auth0-landing',
  templateUrl: './auth0-landing.component.html',
  styleUrls: ['./auth0-landing.component.css']
})
export class Auth0LandingComponent implements OnInit {

  roles: Array<string>;

  constructor(
    private auth0Service: Auth0Service,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('==> Auth0LandingComponent');
    if (this.auth0Service.isAuthenticated()) {
      this.roles = this.auth0Service.getUserRoles();
    } else {
      this.router.navigateByUrl('/auth0-login');
    }
  }

  logout() {
    this.auth0Service.logout();
  }

}
