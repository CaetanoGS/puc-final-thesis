import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

    deleteTransaction(transactionId: number): Observable<any> {
        //return this.http.delete(
        //    `http://localhost:3000/api/transactions/${transactionId}/`,
        //)
        return of(
            {}
        )
    }

    getTransactions(): Observable<any>{
        //return this.http.get("http://localhost:3000/api/transactions/")
        return of(
            [
                {
                  id: 1,
                  category: "salary",
                  value: 3000,
                  createdAt: "01-10-2023"
                },
                {
                  id: 1,
                  category: "salary",
                  value: 3000,
                  createdAt: "01-10-2023"
                },    {
                  id: 8,
                  category: "market",
                  value: 3000,
                  createdAt: "01-10-2023"
                },    {
                  id: 5,
                  category: "stocks",
                  value: 3000,
                  createdAt: "01-10-2023"
                },    {
                  id: 4,
                  category: "travel",
                  value: 3000,
                  createdAt: "01-10-2023"
                },    {
                  id: 3,
                  category: "restaurant",
                  value: 3000,
                  createdAt: "01-10-2023"
                },    {
                  id: 2,
                  category: "salary",
                  value: 3000,
                  createdAt: "01-10-2023"
                },
              ]
        );
    }


}