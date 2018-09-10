import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './models/User';
import { map, catchError, delay, concatMap, switchMap, mergeMap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { Login } from './auth/login/login';

@Injectable({ providedIn: 'root' })
export class UserService {
    userDetailApi = 'http://localhost:8085/loggedInUserDetails';
    loginApi = 'http://localhost:8085/login';
    // chesthalogin = 'http://localhost:8080/spring-boot-restful-post-json/student-login';
    public spinnerSubj = new BehaviorSubject<boolean>(false);
    public loginSubject =  new BehaviorSubject<Login>({"userName":"", "password":""});
    // httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),      
    //     withCredentials: true
    //   };
    constructor(private http: HttpClient) { }
    
    loginData(data) {
        
        
        // let dataval = JSON.parse(data);
        return this.http.post(this.loginApi,data).pipe(delay(3000),
            concatMap(data => this.http.get(this.userDetailApi)),catchError(this.handleError));       
   
            // return this.http.post(this.chesthalogin,{"registrationNumber":"ass","password":"ass"});
            
    }


    handleError(error:HttpErrorResponse){
        if(error.error instanceof ErrorEvent)
        {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else
        {
            console.log(`Backend returned code ${error.status}, ` +
            `body was: ${error.error.message}`);
        }
        return throwError('Something bad has happened!!! Please try again later');
    }   

}