import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/github.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userinfo: User;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getUserInfo().subscribe(
      userinfo => this.userinfo = userinfo
    );
  }

}
