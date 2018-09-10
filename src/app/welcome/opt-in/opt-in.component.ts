import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-in',
  templateUrl: './opt-in.component.html',
  styleUrls: ['./opt-in.component.css']
})
export class OptInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("called 1");
  }

}
