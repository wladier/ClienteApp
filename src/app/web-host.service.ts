import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WebHostService {

  private url: string = 'http://localhost:6565/';


  constructor(private httpClient: HttpClient) {
  }

  sayHello(nombre: string): Observable<any> {

    return this.httpClient.get(this.url + nombre).pipe(
      map(res => {
        console.log(nombre);
        console.log(res);
        return res;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
