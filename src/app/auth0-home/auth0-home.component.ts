import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0Service } from '../services/auth0.service';

@Component({
  selector: 'app-auth0-home',
  templateUrl: './auth0-home.component.html',
  styleUrls: ['./auth0-home.component.css']
})
export class Auth0HomeComponent implements OnInit {

  constructor(
    private auth0Service: Auth0Service,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth0Service.isAuthenticated()) {
      console.log('Autenticato!!!');

      if (this.auth0Service.isAdmin()) {
        console.log('e pure amministratore!');
      } else {
        console.log('ma utente normale!');
      }
    } else {
      console.log('Non autenticato!!!');
      this.router.navigateByUrl('auth0-login');
    }
  }

  logout() {
    this.auth0Service.logout();
  }

}
