import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.authenticate(this.token).subscribe(resp => {
      console.log(resp);
    });
  }

}
