import { Injectable } from '@angular/core';
import { UserRequest, UserResponse} from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedId = new BehaviorSubject<boolean>(false);
  private headers = { 'content-type': 'application/json' };

  constructor(private http:HttpClient) { }

  get isLogged():Observable<boolean>{
    return this.loggedId.asObservable()
  }

  // login(loginreques: loginrequest): Observable<UserResponse | void> {
  //   const body = {
  //     email: loginreques.email,
  //     password: loginreques.password,
  //   };

  //   return this.http
  //     .post<any>(`${environment.API_URL}/auth/login`, JSON.stringify(body), {
  //       headers: this.headers,
  //     })
  //     .pipe(
  //       map((res: UserResponse) => {
  //         //console.log('RES ->', res);
  //         this.saveToken(res.token);
  //         this.loggedId.next(true);
  //         return res;
  //       }),
  //       catchError((err:any) => this.handleError(err))
  //     );


  // }

  login(authData: UserRequest): Observable<UserResponse | void> {
    const body = {
      email: authData.email,
      password: authData.password,
    };

    return this.http
      .post<any>(`${environment.api_url}/auth/login`, JSON.stringify(body), {
        headers: this.headers,
      })
      .pipe(
        map((res : UserResponse ) => {
          console.log('response',res);
        })
      );
      // .pipe(
      //   map((res: UserResponse) => {
      //     //console.log('RES ->', res);
      //     this.saveToken(res.token);
      //     this.loggedId.next(true);
      //     return res;
      //   }),
      //   catchError((err:any) => this.handleError(err))
      // );
  }


  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  private handleError(err: any): Observable<never> {
    let errorMessage = 'An error ocurrend while retrienving data';
    if (err) errorMessage = `Error: Code ${err.message} `;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}


