import {Injectable} from '@angular/core';
import {Headers, Http, ResponseContentType} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpOld: Http, private httpNew: HttpClient) {
  }

  getDataOld() {
    let url = "http://localhost:8080/rest/test";
    let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpOld.post(url, null, {headers: header});
  }

  /*getDataNew() : Observable<string> {
    let url = "http://localhost:8080/test";
    let header = new HttpHeaders({'Content-Type': 'text/plain'});
    //header.set()
    const options = {headers: header};
    let result: Observable<string> = this.httpNew.post<string>(url, {options, responseType: 'text' as 'text'});
    // console.log(result);
    return result.source;
  }*/

  getDataNew() : Observable<string> {
    let url = "http://localhost:8080/rest/test";
    let header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpNew.post<string>(url, null, {headers: header});
  }
}
