import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Issue } from '../model/github-client.model';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['number', 'title', 'state', 'created_at', 'assignee'];

  issuesDs: MatTableDataSource<Issue>;

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getAll().subscribe(data => {
      console.log(data);
      this.issuesDs = new MatTableDataSource<Issue>(data);
      this.issuesDs.paginator = this.paginator;
      this.issuesDs.sort = this.sort;
    });

  }

}
