import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Collection } from 'src/app/shared/class/collection';
import { User } from 'src/app/shared/class/user';

const users = [
  {
    nombre:"nombre",
    apellido:"apellido",
    email:"email"
  },
  {
    nombre:"nombre",
    apellido:"apellido",
    email:"email"
  },
  {
    nombre:"nombre",
    apellido:"apellido",
    email:"email"
  }

];

@Component({
  selector: 'app-clientes-panel',
  templateUrl: './clientes-panel.component.html',
  styleUrls: ['./clientes-panel.component.scss']
})
export class ClientesPanelComponent {
  
  buscar : FormGroup;

  clientList:Collection<User>;

  constructor(private formBuilder: FormBuilder) {
    this.buscar = this.formBuilder.group({
      filtro: ["",[]],
    });

    this.clientList = new Collection(User);
    this.clientList.parse(users);
  }

}
