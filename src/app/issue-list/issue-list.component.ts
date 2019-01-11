import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from '../model/github.model';
import { IssueService } from '../services/issue.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import * as base64 from 'base-64';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Issue>;

  displayedColumns: string[] = ['number', 'title', 'state', 'user', 'date'];
  public loading = false;
  private stateIconsMap = new Map<string, string>();

  constructor(
    private issueService: IssueService
  ) {
    this.stateIconsMap.set('open', 'close');
    this.stateIconsMap.set('closed', 'done');
    console.log(base64.encode('pippo'));
  }

  ngOnInit() {
    this.issueService.getAll().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  public getIconName(issue: Issue): string {
    // switch (issue.state) {
    //   case 'open':
    //     return 'close';
    //   case 'closed':
    //     return 'done';
    //   default:
    //     return 'router';
    // }
    if (this.stateIconsMap.has(issue.state)) {
      return this.stateIconsMap.get(issue.state);
    }
    return 'router';
  }

  public checkState(issue: Issue): boolean {
    if (issue.state === 'open') {
      return true;
    } else {
      return false;
    }
  }

  public setState(issue: Issue): void {
    if (issue.state === 'open') {
      issue.state = 'closed';
    } else {
      issue.state = 'open';
    }
    this.loading = true;
    this.issueService.setState(issue, issue.state).subscribe(is => {
      issue = is;
      this.loading = false;
    });
  }

  public doEvent(event: PageEvent): void {
    console.log(event);
  }
}
