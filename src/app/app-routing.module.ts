import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0CallbackComponent } from './auth0-callback/auth0-callback.component';
import { Auth0HomeComponent } from './auth0-home/auth0-home.component';
import { Auth0LoginComponent } from './auth0-login/auth0-login.component';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityTestComponent } from './security-test/security-test.component';
import { UserGardService } from './services/user-gard.service';

const routes: Routes = [
  // GitHub token authentication
  { path: 'login', component: LoginComponent },
  { path: 'material-test', component: MaterialTestComponent },
  {
    path: '',
    component: MainComponent,
    canActivate: [UserGardService],
    children: [
      { path: 'sec-test', component: SecurityTestComponent },
      { path: 'issue-list', component: IssueListComponent },
      { path: 'issue-add', component: IssueAddComponent },
      { path: 'profile', component: ProfileComponent },
      // { path: '**', redirectTo: 'issue-list' } //commentato per demo Auth0
    ]
  },

  // Auth0 authentication
  { path: 'auth0-login', component: Auth0LoginComponent },
  { path: 'callback', component: Auth0CallbackComponent },
  { path: 'auth0-home', component: Auth0HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
