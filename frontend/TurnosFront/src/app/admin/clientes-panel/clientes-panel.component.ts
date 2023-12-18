import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes-panel',
  templateUrl: './clientes-panel.component.html',
  styleUrls: ['./clientes-panel.component.scss']
})
export class ClientesPanelComponent {
  
  buscar : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buscar = this.formBuilder.group({
      filtro: ["",[]],
    });
  }

}
