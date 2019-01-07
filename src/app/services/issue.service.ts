import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Issue } from '../model/github-client.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Array<Issue>> {
    return this.httpClient.get<Array<Issue>>(`${environment.base_path}/repos/${environment.repo_owner}/${environment.repo_name}/issues`);
  }

  getByNumber(num: number): Observable<Issue> {
    return this.httpClient.get<Issue>(`${environment.base_path}/repos/${environment.repo_owner}/${environment.repo_name}/issues/${num}`);
  }

}
