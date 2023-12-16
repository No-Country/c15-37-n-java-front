import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandService } from '../command-service.service';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import { User } from 'src/app/shared/class/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  formulario: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private command:CommandService,
    private persistence:PersistentService){
    this.formulario = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      enviar:[true]
    });
  
    
  }

  saveData() {
    this.persistence.add("user",
      new User({nombre:this.formulario.get("nombre")?.value}));

    this.command.proceed("landing");
  }

  get nombre() {
    return this.formulario.get("nombre");
  }

  get apellido() {
    return this.formulario.get("apellido");
  }

  get email() {
    return this.formulario.get("email");
  }

  get telefono(){
    return this.formulario.get("telefono");
  }

  get password(){
    return this.formulario.get("password");
  }

  doLogin():void{
    this.command.command = "login";
  }
}
