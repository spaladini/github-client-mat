import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../services/auth0.service';

@Component({
  selector: 'app-auth0-login',
  templateUrl: './auth0-login.component.html',
  styleUrls: ['./auth0-login.component.css']
})
export class Auth0LoginComponent implements OnInit {

  constructor(
    private auth0Service: Auth0Service
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth0Service.authenticate();
  }

}
