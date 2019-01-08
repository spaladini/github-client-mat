import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Issue } from '../model/github.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Issue>> {
    return this.httpClient.get<Array<Issue>>(`${environment.backend_url}/repos/${environment.owner}/${environment.repo}/issues`);
  }
}
