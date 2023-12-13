import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-turnos',
  templateUrl: './btn-turnos.component.html',
  styleUrls: ['./btn-turnos.component.scss']
})
export class BtnTurnosComponent {
  @Input()
  texto: string;

  constructor() {
    this.texto= "";
  }
}
