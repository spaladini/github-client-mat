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

  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
    this.issueService.getAll().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
    });

  }

}
