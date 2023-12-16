import { Component, Input } from '@angular/core';
import { Turno } from 'src/app/shared/class/turno';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {
  @Input() turno: Turno | undefined;
  
  selectedDate: Date = new Date();
  minDate : Date = new Date();

  dateChanged(event:any) {
    //console.log("Date changed", event);
    //handler logic
    this.turno?.setValue("fecha",event);
  }

  public disableWeekendsFilter = (d: Date): boolean => {
    return (d.getDay() !== 0 && d.getDay() !== 6);
  }

}
