import { Component, Input } from '@angular/core';
import { Turno } from 'src/app/shared/class/turno';
import { addMinutes, format, set } from 'date-fns';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent {
  @Input() turno: Turno| undefined;
  
  
  timeSelected="";
  
  // Intervalo de 30 minutos
  intervaloMinutos = 45;
  
  // Hora de inicio a las 9:00 AM
  horaInicio = set(new Date(), { hours: 9, minutes: 0, seconds: 0, milliseconds: 0 });
  
  timeSlots = this.generarHorarios(this.horaInicio);
  
  isSelected(t:string):boolean{
      return this.timeSelected == t;
  }

  select(tm:string):void{
    this.timeSelected =tm;
    const horaSeleccionada = new Date();
    const [hours, minutes] = this.timeSelected.split(':');
    horaSeleccionada.setHours(parseInt(hours, 10));
    horaSeleccionada.setMinutes(parseInt(minutes, 10));
    
    //console.log(format(horaSeleccionada,'HH:mm'));
    
    
    this.turno?.setValue("hora",horaSeleccionada);
  }


  generarHorarios(horaInicio: Date): string[] {
    const horarios: string[] = [];
    const horaFinal = addMinutes(horaInicio, 9 * 60); // 24 horas después de la hora de inicio

    while (horaInicio < horaFinal) {
      horarios.push(format(horaInicio, 'HH:mm'));
      horaInicio = addMinutes(horaInicio, this.intervaloMinutos);
    }

    return horarios;
  }

}
