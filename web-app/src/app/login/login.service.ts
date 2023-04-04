import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  getLoginToken(username: string, password: string): Observable<any> {
    return this.http.post<any>(
        "http://localhost:3000/api/authenticate",
        {
            "username": username,
            "password": password
        }
    )
  }
}