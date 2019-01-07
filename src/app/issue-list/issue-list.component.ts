import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/github-client.model';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  displayedColumns: string[] = ['number', 'title', 'state', 'created_at', 'assignee'];

  issuesDs: Array<Issue>;

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getAll().subscribe(data => {
      console.log(data);
      this.issuesDs = data;
    });
  }

}
