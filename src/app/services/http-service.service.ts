import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  base = 'http://localhost:3300';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  callBackend = async (obj: any, endpoint: string) => {
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const url = `${this.base}/${endpoint}`;
    console.log(`strObj:::${strObj}`);
    return this.http.post(url, strObj, this.httpOptions).toPromise();
  }
}
