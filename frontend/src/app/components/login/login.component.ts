import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = {'username': '', 'password': ''};
  private currentUserName;

  constructor(private loginService: LoginService) {
    this.currentUserName = localStorage.getItem("currentUsername");
  }

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
        localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
        this.loginService.sendToken(localStorage.getItem("token")).subscribe(
          data => {
            this.currentUserName = this.model.username;
            localStorage.setItem("currentUsername", this.model.username);
            this.model.username = '';
            this.model.password = '';
          },
          error => console.log(error)
        );
      },
      error1 => console.log(error1)
    );
  }

}
