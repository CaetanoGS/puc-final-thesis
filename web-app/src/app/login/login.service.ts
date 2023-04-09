import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }

  getLoginToken(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/authenticate",
      {
        "username": username,
        "password": password
      }
    ).pipe(
      tap(
        () => this.redirectUsertoDashboard()
      )
    )
  }

  redirectUsertoDashboard() {
    this.router.navigate(["dashboard"])
  }
}