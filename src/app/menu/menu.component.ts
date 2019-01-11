import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/github.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User;

  pages = [
    { url: '/issue-list', name: 'Elenco issue', icon: 'list' },
    { url: '/issue-add', name: 'Aggiungi issue', icon: 'bug_report' },
    { url: '/profile', name: 'Profile utente', icon: 'account_circle'},
  ];


  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.getUserInfo().subscribe(user => this.user = user);
  }

  current(url: string): boolean {
    return this.router.url.startsWith(url);
  }

  logout() {
    this.authenticationService.logout();
  }

}
