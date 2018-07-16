import {Component, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";
import {d} from "@angular/core/src/render3";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newData: string;
  oldData: string;

  newData2;
  oldData2;

  constructor(private testService: TestService) {
    // this.newData = testService.getDataNew();
  }

  onSubmitNew() {
    this.testService.getDataNew().subscribe(
      (data) => {
        console.log('It works... ' + data);
        this.newData = data;
        this.newData2 = JSON.parse(JSON.stringify(data));
        console.log(this.newData2);
        //this.newData2 = JSON.parse(data);
      }
      ,
      error1 => console.log(error1)
    )
  }

  onSubmitOld() {
    this.testService.getDataOld().subscribe(
      data => {
        console.log('Old works... ' + data);
        this.oldData = data.toString();
      }
      ,
      error1 => console.log(error1)
    )
  }

  setDefaultLocalStorage() {
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3b2xmIiwicm9sZXMiOiJ1c2VyIiwiaWF0IjoxNTMxNzQyNDM1fQ.UTskbfi74QHfKrDwk6jtt8DEEi4T2XlFuYjBpuDA68U");
  }

}
