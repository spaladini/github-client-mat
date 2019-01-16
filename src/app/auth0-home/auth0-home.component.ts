import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../services/auth0.service';

@Component({
  selector: 'app-auth0-home',
  templateUrl: './auth0-home.component.html',
  styleUrls: ['./auth0-home.component.css']
})
export class Auth0HomeComponent implements OnInit {

  constructor(
    private auth0Service: Auth0Service
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth0Service.logout();
  }

}
