import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    console.log('Logout request..');
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }

}
