import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import { Collection } from 'src/app/shared/class/collection';
import { Turno } from 'src/app/shared/class/turno';

const turnos=[
  {
    fecha: new Date(),
    hora: new Date(),
    afeitado:true,
    peinado:true,
    estado:true
  },
  {
    fecha: new Date(),
    hora: new Date(),
    afeitado:true,
    corte:true
    ,
    estado:false
  },
  {
    fecha: new Date(),
    hora: new Date(),
    afeitado:true,
    peinado:true,
    estado:false
  },
  {
    fecha: new Date(),
    hora: new Date(),
    color:true,
    peinado:true,
    estado:true
  }

];

@Component({
  selector: 'app-turnos-panel',
  templateUrl: './turnos-panel.component.html',
  styleUrls: ['./turnos-panel.component.scss']
})
export class TurnosPanelComponent {
  buscar : FormGroup;

  listaTurnos:Collection<Turno>;

  constructor(private formBuilder: FormBuilder) {
    this.buscar = this.formBuilder.group({
      filtro: ["",[]],
    });

    this.listaTurnos = new Collection(Turno);
    this.listaTurnos.parse(turnos);
  }

  formatFecha(f:Date):string{
    return format(f,"dd/MM/yyyy");
  }
  
  formatHora(h:Date):string{
    return format(h,"HH:mm");
  }

  formatServices(services:[]):string{
    return services.join(" ");
  }

  cambiarEstado(t:Turno):void{
    t.estado=!t.estado;
  }
}
