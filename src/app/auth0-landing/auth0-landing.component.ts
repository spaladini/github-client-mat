import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth0-landing',
  templateUrl: './auth0-landing.component.html',
  styleUrls: ['./auth0-landing.component.css']
})
export class Auth0LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('==> Auth0LandingComponent');
  }

}
