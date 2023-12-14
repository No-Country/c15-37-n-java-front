import { Component } from '@angular/core';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent {
  timeSlots = [
    "9:00","10:00","11:00","12:00","13:00","14:00"
  ]

  timeSelected="";

  isSelected(t:string):boolean{
      return this.timeSelected == t;
  }

  select(tm:string):void{
    this.timeSelected =tm;
  }

}
