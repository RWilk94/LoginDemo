import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  sendCredential(model) {
    let tokenUrl = 'http://localhost:8080/login';
    let header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(tokenUrl, JSON.stringify(model), {headers: header})
  }

  sendToken(token) {
    let tokenUrl = 'http://localhost:8080/rest/users';
    console.log('Bearer ' + token);
    let getHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get(tokenUrl, {headers: getHeaders})
  }

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('currentUsername', '');
    alert("You just logged out.");
  }

  checkLogin() {
    if (localStorage.getItem('currentUsername') != null && localStorage.getItem('currentUsername') != ''
      && localStorage.getItem("token") != null && localStorage.getItem("token") != '') {
      console.log(localStorage.getItem("currentUserName"));
      console.log(localStorage.getItem("token"));
      return true;
    } else {
      return false;
    }
  }
}
