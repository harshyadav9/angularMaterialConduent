import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() exitTraining = new EventEmitter<void>();
  spinnerProgress:number = 0;
  timer;
  timerFlag:boolean = true;
  constructor(private dialog: MatDialog) {


   }

  ngOnInit() {
    
    this.startOrResumeTimer();
  }


  startOrResumeTimer(){
    this.timer =  window.setInterval(()=>{
      this.spinnerProgress = this.spinnerProgress + 20;
      if(this.spinnerProgress == 100)   
            this.timerFlag = false;    
    },1000);
  }

  stopTimer(){
    clearInterval(this.timer); 
    let dialog = this.dialog.open(DialogComponent,{data:{'progress':this.spinnerProgress}});
    dialog.afterClosed().subscribe(result=>{
      console.log(`Dialog closed : ${result}`);
      if(result)
        this.exitTraining.emit();
      else
      this.startOrResumeTimer();
    })
  }

}
