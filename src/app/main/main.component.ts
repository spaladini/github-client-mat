import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  slug = `${environment.owner}/${environment.repo}`;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }

}
