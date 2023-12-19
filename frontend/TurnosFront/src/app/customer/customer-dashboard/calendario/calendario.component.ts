import { Component, Input } from '@angular/core';
import { format } from 'date-fns';
import { Turno } from 'src/app/shared/class/turno';
import { es } from 'date-fns/locale';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {
  @Input() turno: Turno | undefined;
  
  currentDate: Date = new Date();
  today:Date = this.currentDate;
  minDate : Date = new Date();
  selectedDay: Date | null = null;

  ngOnInit(): void {
    if(this.turno?.getValue("fecha")){
      this.selectedDay= this.turno?.getValue("fecha");
      this.currentDate =this.turno?.getValue("fecha");
    }
    //

  }

  weekDays: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  handleDayClick(selectedDay:  Date | null ) {
     this.selectedDay = selectedDay;
     this.turno?.setValue("fecha",selectedDay);
    // Aquí puedes realizar acciones específicas para el día seleccionado
    // Por ejemplo, podrías emitir un evento para que el componente padre lo maneje
  }

  isToday(date: Date | null): boolean {
    return date !== null &&
           date?.getFullYear() === this.today.getFullYear() &&
           date?.getMonth() === this.today.getMonth() &&
           date?.getDate() === this.today.getDate();
  }

  isBefore(date: Date | null): boolean {
    const isSunday = date !== null && date.getDay() === 0; // Domingo
    const isOtherDisabledDay = false;
    //= date !== null && /* lógica para deshabilitar otros días específicos */;

    return date !== null && date < this.getStartOfDay(this.today) && !isSunday && !isOtherDisabledDay;
  }

  isSunday(date: Date | null): boolean {
    return date !== null && date.getDay() === 0; // Domingo
  }

  isOtherDisabledDay(date: Date | null): boolean {
    // Lógica para deshabilitar otros días específicos
    //return date !== null && /* lógica */;
    return false;
  }

  isSameDay(date1: Date | null, date2: Date | null): boolean {
    return date1 !== null && date2 !== null &&
           date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  private getStartOfDay(date: Date): Date {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }

  getDaysInMonth(date: Date): (Date | null) []{
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];

    const startingDay = firstDay.getDay(); // Obtener el día de la semana del primer día del mes
    

    // Agregar días en blanco hasta llegar al primer día del mes
    for (let i = 0; i < startingDay; i++) {
      days.push(null); // Puedes usar null o un valor especial para representar días vacíos
    }

    // Agregar los días del mes
    for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }

    return days;
  }

  getMonthName(date: Date): string {
  return format(date, 'MMMM', { locale: es });
}
  
}

