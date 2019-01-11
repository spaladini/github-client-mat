import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from '../model/github.model';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Issue>;

  displayedColumns: string[] = ['number', 'title', 'state', 'user', 'date'];
  private stateIconsMap = new Map<string, string>();

  constructor(
    private issueService: IssueService
  ) {
    this.stateIconsMap.set('open', 'close');
    this.stateIconsMap.set('closed', 'done');
  }

  ngOnInit() {
    this.issueService.getAll().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
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
}
