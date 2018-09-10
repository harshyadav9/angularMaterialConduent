import { Component, OnInit } from '@angular/core';
import { trigger, state, style, query ,transition, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css'],
  // animations:[
  //   // the fade-in/fade-out animation.
  //   trigger('simpleFadeAnimation', [
  //      state('show', style({
  //       opacity:1
  //      })),
  //      state('hide', style({
  //       opacity:0
  //      })),
  //      transition('show => hide' , animate('1000ms ease-in')),
  //      transition('hide => show' , animate('1000ms ease-out'))
  //    ])
  //  ]
  animations: [
    trigger('toggleHeight', [
           state('hide', style({
               height: '0px',
               opacity: '0',
               overflow: 'hidden',
               display: 'none'
           })),
           state('show', style({
               height: '*',
               opacity: '1',
               display: 'block'
           })),
           transition('hide => show', animate('2000ms ease-in')),
           transition('show => hide', animate('2000ms ease-out'))
       ])
   ]
})
export class BroadcastComponent implements OnInit {
 show:boolean = false;
 isShow:string = 'hide';
 hideTimeFlag:boolean = false;
  constructor() { }

  ngOnInit() {
    console.log("asasas");
  }

  get stateName(){
    console.log("casasas");
    return this.show ? 'show':'hide';
  }

  toggle(){
    this.show= !this.show;
  }

  radioClick(){
    this.hideTimeFlag = true;
    this.isShow = 'show';
    this.toggle();
  }

}
