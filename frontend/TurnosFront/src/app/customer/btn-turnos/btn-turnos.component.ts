import { Component, Input } from '@angular/core';
import { CommandService } from '../command-service.service';

@Component({
  selector: 'app-btn-turnos',
  templateUrl: './btn-turnos.component.html',
  styleUrls: ['./btn-turnos.component.scss']
})
export class BtnTurnosComponent {
  @Input()
  texto: string;
  @Input() cssClass:string | undefined ;

  constructor(private command:CommandService) {
    this.texto= "";
  }

  public doClick(){
    this.command.command = "turnos";
  }
}
