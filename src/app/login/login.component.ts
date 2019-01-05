import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.authenticate(this.token).subscribe(resp => {
      console.log(resp);
      this.notifications.success(`Bentornato ${resp.name}`);
      this.router.navigateByUrl('/issue-list');
    }, err => {
      this.notifications.error(`Autenticazione fallita`);
    });
  }

}
