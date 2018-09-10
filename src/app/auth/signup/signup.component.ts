import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../../user.service';
import { Login } from '../login/login';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate:Date;
  userDetail:Login;
  constructor(private authSerice:AuthService, private userService:UserService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-4);
    this.maxDate.setMonth(this.maxDate.getMonth());
    this.userService.loginSubject.subscribe(data=>{
      this.userDetail = data;
    });
  }

  submit(form:NgForm){
    console.log(form.value);
    this.authSerice.registerUser({
      email:form.value.email,
      password:form.value.password
    });
  }
}
