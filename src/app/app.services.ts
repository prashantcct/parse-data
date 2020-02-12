import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient) { }  
  
    public getParseData() {
        return this.httpClient.get('http://localhost:3000/parse');
    }
  
    public getCountName(data) {
        return this.httpClient.get('http://localhost:3000/name-count/'+data);
    }
}