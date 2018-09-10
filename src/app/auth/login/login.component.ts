import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../../user.service';
import { MatSnackBar } from '@angular/material';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy {

  loginForm:FormGroup;
  subsc:Subscription;
  constructor(private fb:FormBuilder,private authService:AuthService , 
    private http:HttpClient , private userService:UserService,public snackBar: MatSnackBar , private router:Router ) {

    this.loginForm = this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required] 
    })
   }

  ngOnInit() {
     
  }


  ngOnDestroy(){
    console.log("before destroy",this.subsc);
    this.subsc.unsubscribe();
    console.log("ater destroy",this.subsc);
  }

  onSubmit(form:any){
    this.userService.spinnerSubj.next(true);
    // this.authService.login({
    //   email:form.email,
    //   password:form.password
    // });
      // this.http.post('/api/authenticate' , {username:form.username , password:form.password}).subscribe(res=>{
      //   sessionStorage.setItem("currentUser",res["token"]);
      // });
      let data = {userName:form.username , password:form.password};
      this.subsc = this.userService.loginData(data).subscribe((data:Login)=>{console.log("data",data)
      // alert(data);
      this.userService.loginSubject.next(data);
      this.router.navigate(['/welcome']);
      this.userService.spinnerSubj.next(false);
      },error=>{console.log("error",error);
    
      this.userService.spinnerSubj.next(false);
      });
    
    }

}


