import { Component} from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  public username: string = "";
  public password: string = "";

  constructor(private loginService: LoginService) { }

  login() {
    console.log(this.username)
      this.loginService.getLoginToken(this.username, this.password).subscribe(
        (response) => {console.log(response);}
      )
  }
}

