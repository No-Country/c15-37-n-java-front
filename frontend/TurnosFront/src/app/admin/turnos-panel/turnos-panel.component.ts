import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-turnos-panel',
  templateUrl: './turnos-panel.component.html',
  styleUrls: ['./turnos-panel.component.scss']
})
export class TurnosPanelComponent {
  buscar : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buscar = this.formBuilder.group({
      filtro: ["",[]],
    });
  }
}
