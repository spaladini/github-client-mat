import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})
export class IssueAddComponent implements OnInit {

  title: string;
  body: string;

  constructor(
    private readonly issueService: IssueService,
    private readonly router: Router,
    private readonly notificationsService: NotificationsService
  ) { }

  submit() {
    this.issueService.add(this.title, this.body).subscribe(issue => {
      this.notificationsService.success(
        'Issue inserita',
        `Nuova issue creata: #${issue.number}`
      );
      this.router.navigate(['/issue-list']);
    });
  }

  ngOnInit() {
  }

}
