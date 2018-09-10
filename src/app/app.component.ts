import { Component , ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  @ViewChild('sidenav') sidenav;
  spinnerFlag:Boolean = false;
  constructor(private userService:UserService){

  }
  ngOnInit(){
    this.userService.spinnerSubj.subscribe((flag:boolean)=>{
      this.spinnerFlag = flag;
    });
  }
  // onClose()
  // {
  //   this.sidenav.close();
  // } 
  ngAfterViewInit(){
    console.log("sidenav",this.sidenav);
    
  }
  title = 'app';
}
