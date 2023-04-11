import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequest } from './user';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private headers = {'content-type': 'application/json'}


  constructor(private http:HttpClient){}


  registrarUser (data:UserRequest){

    let httpOptions:Object = {
      headers :new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
      }
        const body = {
          email:data.email,
          password: data.password
        };
        return this.http.post<any>(`${environment.api_url}/user/createUser`, JSON.stringify(body), httpOptions)
        .pipe(
          map((res: any) => {
            return res;
          }),
          catchError((err) => this.handleError(err))
        );
    }

  private handleError(err: any): Observable<never> {
    let errorMessage = 'An error ocurrend while retrienving data';
    if (err) errorMessage = `Error: Code ${err.message} `;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  }

