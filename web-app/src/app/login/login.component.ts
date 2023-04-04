import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginToken } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  private token = new Subject<LoginToken>();
  public token$ = this.token.asObservable();

  constructor(private loginService: LoginService) { }

  ngOnInit() { } 

  async login(username: string, password: string) {
      this.loginService.getLoginToken(username, password).subscribe(
        (response) => {console.log(response); localStorage.setItem("token", response.token) ;}
      )
  }
}

