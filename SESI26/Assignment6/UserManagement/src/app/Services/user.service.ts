import { Injectable } from '@angular/core';
import { User, UserForm } from '../Models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  // GET
  getUsers(): Observable<any> {
    let api = `${this.endpoint}`;
    return this.http
      .get(api)
      .pipe(catchError(this.handleError));
  }

  // GET: id
  getUserById(id: Number): Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http
      .get(api)
      .pipe(catchError(this.handleError));
  }

  // POST
  postUser(userForm: UserForm):  Observable<any> {
    let api = `${this.endpoint}`;
    return this.http
      .post(api, userForm)
      .pipe(catchError(this.handleError));
  }

  // PUT: id
  putUserById(id: Number, userForm: UserForm): Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http
      .put(api, userForm)
      .pipe(catchError(this.handleError));
  }

  // DELETE: id
  deleteUserById(id: Number) : Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http
      .delete(api)
      .pipe(catchError(this.handleError));
  }

  // Error Handling
  handleError (e: HttpErrorResponse){
    let msg = '';
    if (e.error instanceof ErrorEvent) {
      msg = e.error.message;
    }else{
      msg = `Error Code: ${e.status}\n Message: ${e.message}`;
    }
    return throwError(msg);
  };


}
