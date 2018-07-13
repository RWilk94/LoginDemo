import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Headers, Http} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: Http) { }

  sendUser(user: User) {
    let url = "http://localhost:8080/register";
    let header = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: header});
  }
}
