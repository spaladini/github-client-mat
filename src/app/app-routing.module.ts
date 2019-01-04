import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'issue-list', component: IssueListComponent
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
