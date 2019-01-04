import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/github-client.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(token: string): Observable<User> {
    return this.httpClient.get(`${environment.base_path}/user?access_token=${token}`) as Observable<User>;
  }

}