import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Issue } from '../model/github.model';

const issuesURL = `${environment.backend_url}/repos/${environment.owner}/${environment.repo}/issues?state=all`;

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Issue>> {
    return this.httpClient.get<Array<Issue>>(issuesURL);
  }

  add(title: string, body?: string): Observable<Issue> {
    return this.httpClient.post<Issue>(
      issuesURL,
      {
        title: title,
        body: body
      }
    );
  }

}
