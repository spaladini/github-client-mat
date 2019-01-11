import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { UserGardService } from './services/user-gard.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    canActivate: [UserGardService],
    children: [
      { path: 'issue-list', component: IssueListComponent },
      { path: 'issue-add', component: IssueAddComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: 'issue-list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
