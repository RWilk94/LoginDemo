import {Component} from '@angular/core';
import {User} from "../../models/user";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser: User = new User();
  registered: boolean = false;

  constructor(private registerService: RegisterService) {
  }

  onSubmit() {
    console.log('submit test');
    this.registerService.sendUser(this.newUser).subscribe(data => {
        console.log(data);
        this.registered = true;
        this.newUser = new User();
      },
      error => console.log(error));
  }
}
