import { Component, OnInit, ViewChild } from "@angular/core";
import { Router }                       from "@angular/router";
import { FileUtil }                     from './file.util';
import { Constants }                    from './test.constants';
 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
 
export class TestComponent implements OnInit {  
 
  csvContent:string;
  constructor(private _router: Router, private _fileUtil: FileUtil ) { 

  }
 
  ngOnInit() {

   }

 
}