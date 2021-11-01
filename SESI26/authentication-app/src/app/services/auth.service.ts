import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  //Sign-up
  signUp(user: User): Observable<any>{
    let api = `${this.endpoint}/register`;
    return this.http
            .post(api, user)
            .pipe( catchError(this.handleError))
  }

  //Error Handling
  handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      return throwError(err.error.message);
    }else{
     return throwError(`Error Code: ${err.status}\n Message: ${err.message}`);
    }
  }
  
}
