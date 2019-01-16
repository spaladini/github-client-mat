import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../services/auth0.service';

@Component({
  selector: 'app-auth0-callback',
  templateUrl: './auth0-callback.component.html',
  styleUrls: ['./auth0-callback.component.css']
})
export class Auth0CallbackComponent implements OnInit {

  constructor(
    private auth0Service: Auth0Service
  ) { }

  ngOnInit() {
    this.auth0Service.handleAuthentication();
  }

}
